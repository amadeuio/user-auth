![languages](https://img.shields.io/badge/languages-ts-blue)
![license](https://img.shields.io/badge/license-MIT-green)

# User Auth

### Description 📚

This repo features a User authentication class implemented in TypeScript. It provides user registration, authentication, and other user management features using the bcrypt library for secure password hashing and verification.

### Features ✨

- User Registration: Users can register by providing a unique username and a password. Passwords are securely hashed using bcrypt before storing them.

- Authentication: Registered users can log in by providing their username and password. The app verifies the password against the stored hashed password to authenticate the user.

- Username Existence Check: You can check if a username is already taken before attempting to register a new user.

- User Management: You can retrieve user data by username and remove users by their username (for account deletion).

### Methods 🔧

#### User Class

- Constructs user objects with username and password.

#### UserAuth Class

- `hashPassword()`: Hash a password using bcrypt.

- `registerUser()`: Registers a new user with a hashed password.

- `verifyPassword()`: Checks weather a passowrd coincides with a hashed password.

- `authenticate()`: Finds if a user and password pair is within the users list.

- `usernameExists()`: Checks if a username already exists.

- `getUserByUsername()`: Retreives a user by username.

- `removeUserByUsername()`: Removes a user by username (account deletion).

### Getting Started 🏁

#### Prerequisites

- Node.js installed on your system
- npm (Node Package Manager) installed on your system

#### Installation

1. Clone the repository to your local machine:

   ```sh
   git clone git@github.com:nightrunner4/user-auth.git
   ```

2. Navigate to the project directory:

   ```sh
   cd user-auth
   ```

3. Install the project dependencies (in this case, bcrypt):

   ```sh
   npm install
   ```

### Usage 🖊️
