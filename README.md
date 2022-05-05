# okta-todo

This is an application to create and view todos integrated with Okta hosted login. 

Step 1 - Clone the repository 

git clone https://github.com/piyushazanjad/okta-todo.git

Step 2 - Install MongoDB using this documentation - https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/?fbclid=IwAR0KbxyNvrLwTuCQ-Bpo9RhmOCpAiurU-kaHjhbmvJJ8sGCfrU3phHDCclQ 

You can download MongoDB Compass (the GUI for MongoDB) from this link - https://www.mongodb.com/try/download/compass 

After installing the above, mongodb will start running on port 27017.

Please follow the below instructions to create database and collections in MongoDB - https://www.mongodb.com/basics/create-database?fbclid=IwAR3bgtmBVUsNiL0mQLmLrFAWoFIvQkRFSxtCgR3tH7fEJn9ro8uvOgKCwZY

* Create a database named “todosdb”
* Create a collection named “todos” 

This will be used to store the todo list of the users. 

Step 3 - Set the following Environment variables. Please visit the readme to get more information on where to find the values -  https://github.com/okta/samples-js-react 

- ISSUER=https://dev-48213059.okta.com/oauth2/default
- CLIENT_ID=0oa4dpvj0uM3ouCrJ5d7
- SPA_CLIENT_ID=0oa4dpvj0uM3ouCrJ5d7


Step 4 - cd into okta-hosted-login folder and run the following command to install the node modules

<pre><code>npm install</code></pre>

Step 5 - Run the following command from directory “okta-hosted-login“ to start the server on localhost 8080

`npm start`

Step 6 - cd into “samples-nodejs-express-4”  folder and run the following command to install the node modules

`npm install`

Step 7 - Run the following command to start the resource server on localhost 8000

`npm run resource-server`

Step 8 - You can use this test user to login into the application : 

`Username : abc@gmail.com
Password : test@123`

Step 9 - Access http://localhost:8080/todo to view all the todos and add new todos. 
