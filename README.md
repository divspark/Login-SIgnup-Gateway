# Node.js Express JWT Authentication Backend

This repository contains the backend implementation for a simple authentication system using Node.js, Express.js, and JWT (JSON Web Tokens).

## Features

- **User Signup**: API endpoint to register new users.
- **User Login**: API endpoint to authenticate and generate JWT tokens.
- **JWT Middleware**: Middleware to protect routes that require authentication.

## Prerequisites

- Node.js and npm installed locally.
- MongoDB installed and running.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file based on `.env.example` and set your environment variables (e.g., MongoDB URI, JWT secret).

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Signup

- **POST /api/auth/signup**
  - Request body:
    ```json
    {
      "username": "example",
      "password": "examplepassword"
    }
    ```
  - Response:
    ```json
    {
      "message": "User registered successfully."
    }
    ```

### Login

- **POST /api/auth/login**
  - Request body:
    ```json
    {
      "username": "example",
      "password": "examplepassword"
    }
    ```
  - Response:
    ```json
    {
      "token": "<JWT_TOKEN>"
    }
    ```

## Technologies Used

- Node.js
- Express.js
- JSON Web Tokens (JWT)
- MongoDB (with Mongoose)
