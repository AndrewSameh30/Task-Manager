# Task Management API

### Description:
This is a backend service for a Task Management application, allowing users to create, update, retrieve, and delete tasks. It also supports user authentication using JWT (JSON Web Token).

---

## Endpoints:

### 1. **Register User** (`POST /api/register`)

- **Description**: Registers a new user.
- **Request Body**:
  ```json
  {
    "username": "exampleUser",
    "password": "examplePassword"
  }
- **Response**:  
  **201 Created**: User created successfully.  
  **400 Bad Request**: Username already exists.


### 2. **Login User** (`POST /api/register`)

- **Description**: Logs in a user and returns a JWT token.
- **Request Body**:
  ```json
  {
    "username": "exampleUser",
    "password": "examplePassword"
  }
- **Response**:  
  **201 Created**: Login successful, returns JWT token.  
  **400 Bad Request**: Invalid credentials.  


### 3. **Get All Tasks** (`GET /api/tasks`)

- **Description**: Retrieves all tasks for the authenticated user.
- **Headers**:  
  **Authorization**: <JWT_Token>
- **Response**:  
  **200 Ok**: List of tasks.   
  **400 Bad Request**: Invalid Token  
  **401 Unauthorized**: Access denied. No token provided  


### 4. **Create Task** (`POST /api/tasks`)

- **Description**: Creates a new task for the authenticated user.
- **Request Body**:
  ```json
  {
    "title": "Task title",
    "description": "Task description",
    "due_date": "2024-12-25"
  }
- **Response**:  
  **201 Created**: Task created successfully.  
  **400 Bad Request**: Invalid Token  
  **401 Unauthorized**: Access denied. No token provided  


### 5. **Update Task** (`PUT /api/tasks/:id`)

- **Description**: Updates an existing task for the authenticated user.
- **Request Body**:
  ```json
  {
    "title": "Updated title",
    "description": "Updated description",
    "due_date": "2024-12-30",
    "status": "completed"
  }
- **Response**:  
  **200 OK**: Task updated successfully.  
  **400 Bad Request**: Invalid Token  
  **401 Unauthorized**: Access denied. No token provided  
  **404 Not Found**: Task not found or unauthorized.


### 6. **Delete Task** (`DELETE /api/tasks/:id`)

- **Description**: Deletes a task for the authenticated user.
- **Response**:  
  **200 OK**: Task deleted successfully.  
  **400 Bad Request**: Invalid Token  
  **401 Unauthorized**: Access denied. No token provided  
  **404 Not Found**: Task not found or unauthorized.


## Setup Instructions:  

### 1. **Clone the Repository**
- Clone the project repository to your local machine:

```bash
git clone https://github.com/AndrewSameh30/Task-Manager.git
```


### 2. **Install Dependencies**
- Navigate to the project directory and install the necessary dependencies:

```bash
cd TaskManager
npm install
```


### 3. **Run the Server**
Start the server with the following command:

```bash
node app.js
```

