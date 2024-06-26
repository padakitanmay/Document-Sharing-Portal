# Document Sharing Portal

- This repository contains the source code for a Document Sharing Portal built using the MERN stack (MongoDB, Express.js, React, Node.js).
- In this portal you can sign up yourself to send and receive files from other users.
- The files are only visible to the sender and the receiver.

## Folder Structure

-   **frontend**: Contains the frontend codebase.
-   **backend**: Contains the backend codebase.

## Frontend Setup

### Installation

Firstly, clone this repository.

To install dependencies for the frontend, navigate to the `frontend` directory and run:

```bash
cd frontend
npm install
npm i antd axios react-router-dom 
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Starting the Development Server

 To start the frontend development server, run:
```bash
npm run dev
```
Code will be deployed on localhost:5173

## Backend Setup

### Install dependencies

To install dependencies for the frontend, navigate to the `backend` directory and run:

```bash
npm i bcrypt cors dotenv express jsonwentoken mongoose multer
```

### Starting the Server

 To start the frontend development server, run:
```bash
npm run dev
```
Code will be deployed on localhost:5000

### Now Signup and start using the application

