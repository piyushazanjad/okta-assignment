import { useOktaAuth } from '@okta/okta-react';
import React, { useState, useEffect } from 'react';
import { Header, Icon, Message, Table } from 'semantic-ui-react';
import jwt_decode from 'jwt-decode';

import ToDoList from "./ToDoList";
import config from './config';
import ToDoForm from './ToDoForm';

const Todo = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [todoFetchFailed, setTodosFetchFailed] = useState(false);
  const [todos, setTodos] = useState(null);

  const accessToken = oktaAuth.getAccessToken();
  const idToken = oktaAuth.getIdToken();
  const decodedIdToken = jwt_decode(idToken);
  const userEmail = decodedIdToken.email;

    // fetch todos
  useEffect(() => {
    if (authState && authState.isAuthenticated) {
      const accessToken = oktaAuth.getAccessToken();
      fetch((`${config.resourceServer.todoUrl}/${userEmail}`), {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            return Promise.reject();
          }
          return response.json();
        })
        .then((data) => {
            var todo_json = data;
            let index = 0;
            const formatTodos = todo_json.todos.map((todo) => {

              index += 1;
              return {
                id: todo.id,
                task: todo.task,
                complete:todo.complete
              };
            });
            
            setTodos(formatTodos);
            setTodosFetchFailed(false);
        })
        .catch((err) => {
          setTodosFetchFailed(true);
          /* eslint-disable no-console */
          console.error(err);
        });
    }
  }, [authState]);

  const possibleErrors = [
    'You\'ve downloaded one of our resource server examples, and it\'s running on port 8000.',
    'Your resource server example is using the same Okta authorization server (issuer) that you have configured this React application to use.',
  ];

  const addTask = (userInput ) => {
    if (authState && authState.isAuthenticated) {
      const accessToken = oktaAuth.getAccessToken();

       console.log("userInput", userInput);

       let copy = [...todos];
       copy = [...copy, { id: todos.length + 1, task: userInput, complete: false }];
       setTodos(copy);


       fetch(config.resourceServer.saveTodoUrl, {
         method: 'POST',
         headers: {
           Authorization: `Bearer ${accessToken}`,
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           todos: copy,
           userInput: { id: todos.length + 1, task: userInput, complete: false,email: userEmail },
      }),
       })
         .then((res) => res.json())
         .catch((err) => console.log('error'))
      }
}

const todo_index = 0;

  return (
    <div>
      <Header as="h1">
        <Icon name="mail outline" />
        My Todos
      </Header>
      {todoFetchFailed && <Message error header="Failed to fetch messages.  Please verify the following:" list={possibleErrors} />}
      {!todos && !todoFetchFailed && <p>Fetching Messages..</p>}
      {todos
      && (
      <div>
        <ToDoForm addTask={addTask}/>
            <Table>
                 <thead>
                   <tr>
                     <th>No.</th>
                     <th>Task</th>
                   </tr>
                 </thead>
                 <tbody>
                 {todos.map((todo,todo_index) => (
                     <tr id={todo.id} key={todo.id}>
                       <td>{++todo_index}</td>
                       <td>{todo.task}</td>
                     </tr>
                  ))}
               </tbody>
              </Table>
      </div>
      )}
    </div>
  );
};
export default Todo;
