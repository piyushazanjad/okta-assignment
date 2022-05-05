import React from 'react';

const PrintToDo = ({todo}) => {
   return (
       <div>
           {todo.task}
       </div>
   );
};

export default PrintToDo;
