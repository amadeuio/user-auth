![languages](https://img.shields.io/badge/languages-ts-blue)
![license](https://img.shields.io/badge/license-MIT-green)

# User Auth

### Description 📚

This repository contains a TypeScript class for user authentication that includes secure password hashing and verification using bcrypt.

### Features 📚

- Register new users with hashed passwords.
- Authenticate users securely.
- Protects against common security vulnerabilities.

### Methods 🔧

#### Users Class

- Constructs user objects with username and password.

#### Tree Class

- `hashPassword()`: Hash a password using bcrypt.

- `registerUser()`: Registers a new user with a hashed password.

- `verifyPassword()`: Checks weather a passowrd coincides with a hashed password.

- `authenticate()`: Finds if a user and password pair is within the users list.

- `usernameExists()`: Checks if a username already exists.

- `getUserByUsername()`: Retreives a user by username.

- `removeUserByUsername()`: Removes a user by username (account deletion).

### Usage 🖊️

1. Install bcrypt (specified in package.json):

   ```bash
   npm install
   ```
