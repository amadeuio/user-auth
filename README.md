![languages](https://img.shields.io/badge/languages-ts-blue)
![license](https://img.shields.io/badge/license-MIT-green)

# User Auth 📝

### Description 📚

This repo features a User authentication class implemented in TypeScript. It provides user registration, authentication, and other user management features using the bcrypt library for secure password hashing and verification.

The app also demonstrates the use of async functions, as the bcrypt library requires some processing time.

### Features ✨

- **User Registration**: Users can register by providing a unique username and a password. Passwords are securely hashed using bcrypt before storing them.

- **Unique Usernames**: Before registering, the app makes sure the username isn't already taken.

- **Authentication**: Registered users can log in by providing their username and password. The app verifies the password against the stored hashed password to authenticate the user.

- **Username Existence Check**: You can check if a username is already taken before attempting to register a new user.

- **User Management**: You can retrieve user data by username and remove users by their username (for account deletion).

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

**1. Create a users list**

This is where we will store all our users data base.

```typescript
const userList = new userAuth();
```

**2. Create an IIFE**

Since most of the methods we are going to use are asynchronous, we will call them inside an `async` IIFE (Immediately Invoked Function Expression). This is a handy way to call `async` functions, and it allows us to `await` each asynchronous operation, ensuring that one completes before moving on to the next.

```typescript
(async () => {
  // Methods will be called here ...
})();
```

**3. Register a few users**

```typescript
await userList.registerUser("user1", "password1");
await userList.registerUser("user2", "password2");
await userList.registerUser("user3", "password3");
```
