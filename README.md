# TodoList

# Project Name:  To-do List

# Project Description:  
# Overview
This To-Do List application is designed to help users manage their tasks efficiently by providing a simple and intuitive interface for creating, editing, and organizing to-do lists and items. Built with React for the front end and Express with Node.js for the backend, the application enables users to:
        Add and manage multiple to-do lists.
        Add, edit, and delete to-do items within each list.
        Filter to-do items by their completion status.
        Download snapshots of their to-do lists.
# Technologies Used
    React
    Express and Node.js

# Content:
                Cloning
                Installation
                Server
                Client
                Running the Application
                Features
                Components
                API End-points
                Styling
                Dependencies
                Conclusion


# Cloning:
Make a folder where you want to clone the project.
Open the terminal.
Change to the directory
		Cd   <name of the directory> 
            Run this command on the terminal.
		git clone https://github.com/kSurjeet/TodoList.git

	If you have visual studio installed in your computer
	After cloning run 
			Code .
	Project will open in the visual studio.
	else	
	  Check your folder it will have a folder with a project.
	It will clone with the folder name TodoList
	Cd TodoList
# Installation:
 
# Client: folder with the name todoListClient
In terminal

Navigate to the todoListClient directory:
  cd todoListClient
 cd to-do

# Install the dependencies:

    npm install
    npm install axios
    npm install downloadjs
    npm install html2canvas
    npm install tooltip
    npm install react-icons
# Server
Navigate to the server directory.
    npm install
    npm install express
    npm install fs
    npm install body-parser

# Running the Application
Open the two instances of the terminal.
Make sure you are starting the server before the client.
# Server:
In one terminal
Navigate to the server directory.

Start the server:
npm start or node server.js
The server will run on http://localhost:4000

# Client
Second Terminal:
Navigate to the client directory.which is to-do.

Start the client:
npm start
The client will run on http://localhost:3000.

# Features
** Add To-Do Lists **: Users can add new to-do lists.
** Edit To-Do Lists **: Users can edit the titles of existing to-do lists.
** Delete To-Do Lists **: Users can delete existing to-do lists.
** Add To-Do Itemsc **: Users can add new to-do items to a list.
** Edit To-Do Items **: Users can edit the titles of existing to-do items.
** Delete To-Do Items**: Users can delete existing to-do items.
** Filter To-Do Items**: Users can filter to-do items by their completion status.
** Download Snapshot**: Users can download a snapshot of their to-do list.

# Components
**AddTodoList**
    A component that allows users to add new to-do lists.
**Todolist**
    A component that displays the list of to-do lists and allows users to interact with them (add, edit, delete, select).
**TodoListItems**
A component that displays the items of a selected to-do list and allows users to interact with them (add, edit, delete, mark as complete/incomplete).
**FilterComponent**
    A component that provides filtering options for to-do items.
**InputComponent**
A component that provides an input field for adding new to-do items.
**TodoListComponent**
    A component that displays the filtered to-do items.
**Server.js**
    To handle all server requests.
**todoList.json**
    File Operations: Managing file reads and writes efficiently to handle concurrent operations.

**API Endpoints on client Side**
    GET /todos
    Fetch all to-do lists.
    GET /todos/{listid}
    Fetch a specific to-do list by ID.
    POST /todos
    Create a new to-do list.
    POST /todos/{listid}/todoItems/{itemid}
    Add a new item to a specific to-do list by ID.
    PUT /todos/{listid}
    Update a to-do list by ID.
    PUT /todos/{listid}/todoItems/{itemid}
    Update a specific item in a to-do list by list ID and item ID.
    DELETE /todos/{listId}
    Delete a to-do list by ID.
    DELETE /todos/{listid}/todoItems/{itemid}
    Delete a specific item in a to-do list by list ID and item ID.

**API Endpoints on server Side**
    GET /todos
    Retrieve the list of all to-do lists.
    Response
    Status 200: Returns an array of to-do lists.
    Status 204: If the list is empty.
    Status 500: If there's an error reading the list.
    GET /todos/:id
    Retrieve a specific to-do list by ID.
    Response
    Status 200: Returns the to-do list.
    Status 204: If the list is empty.
    Status 404: If the to-do list is not found.
    POST /todos
    Create a new to-do list.
    Request Body
    id: Unique identifier for the to-do list.
    title: Title of the to-do list.
    todoItems: Array of to-do items.
    Response
    Status 201: Returns the created to-do list.
    Status 400: If the provided data is invalid.
    POST /todos/:id/todoItems
    Add a new item to a specific to-do list.
    Request Body
    id: Unique identifier for the item.
    title: Title of the item.
    date: Date of the item.
    isCompleted: Completion status.
    Response
    Status 201: Item added successfully.
    Status 400: If the provided data is invalid.
    Status 404: If the to-do list is not found.
    PUT /todos/:id
    Update the title of a specific to-do list.
    Request Body
    title: New title for the to-do list.
    Response
    Status 200: Returns the updated to-do list.
    Status 404: If the to-do list is not found.
    PUT /todos/:id/todoItems/:itemId
    Update a specific item within a to-do list.
    Request Body
    title: New title for the item.
    date: New date for the item.
    isCompleted: New completion status.
    Response
    Status 200: Returns the updated item.
    Status 404: If the to-do list or item is not found.
    DELETE /todos/:id/todoItems/:itemId
    Delete a specific item from a to-do list.
    Response
    Status 204: Item deleted successfully.
    Status 404: If the to-do list or item is not found.
    DELETE /todos/:id
    Delete a specific to-do list.
    Response
    Status 204: To-do list deleted successfully.
    Status 404: If the to-do list is not found.

**Styling**
    The project uses custom CSS for styling. The CSS file is located at todoListClient/to-do/Components/src/Todo/TodoList.css.

**Dependencies**
    Client
    React
    Axios
    react-icons
    react-tooltip
    html2canvas
    downloadjs
    Server
    Express
    body-parser
    fs
    path
**Conclusion**
**Server-Side**
    The server-side of this application, built with Express and Node.js, provides a robust API for managing to-do lists and their items. Key functionalities include creating, reading, updating, and deleting to-do lists and items. The use of the fs module for file operations ensures that data is persistently stored in a JSON file, making it easy to manage and retrieve tasks. Despite its simplicity, this approach allows for flexibility in managing tasks, and the server efficiently handles various edge cases and error conditions. 
**Client-Side**
    The client-side of the application interacts with the server via HTTP requests to perform CRUD operations on to-do lists and items. It features a user-friendly interface for managing tasks, with forms for adding and editing to-do lists and items. By using React and state management techniques, the client-side ensures a dynamic and responsive user experience. The application’s design allows for easy navigation and interaction, making task management straightforward and efficient.
    Together, both the server and client sides form a cohesive system that addresses fundamental to-do list application  needs.
