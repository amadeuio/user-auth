![languages](https://img.shields.io/badge/languages-ts-blue)
![license](https://img.shields.io/badge/license-MIT-green)

# User Auth 📝

### Description 📚

This repo features a User authentication class implemented in TypeScript. It provides user registration, authentication, and other user management features using the bcrypt library, which offers secure password hashing and verification. The repo also demonstrates the use of async functions, as the bcrypt library requires processing time.

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

3. Install the project dependencies (in this case, bcrypt, as specified in [package.json](./package.json)):

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

**4. Register an existing username**

The method will return a message indicating that the username is already taken, and the registration process will not proceed.

```typescript
await userList.registerUser("user1", "randompass"); // Username taken
```

**5. Let's `console.log` our usersList**

```typescript
console.log(userList);
```

```typescript
userAuth {
  users: [
    User {
      username: 'user1',
      password: '$2b$10$bVenYXyDoTsfu5ps.ApAvehKen8xl3TF5XNGSgAs6vhHcTEoeShfa'
    },
    User {
      username: 'user2',
      password: '$2b$10$wHNvUkQgcJpfkD6.8AJeweTCNAQMVtE8m5NWBUneYlZSvbEd48OBO'
    },
    User {
      username: 'user3',
      password: '$2b$10$E3CQhxdTPNIhoECi9ftYaO1LQFkXLcicWxnAmZudwQOBiDSgrCNBO'
    }
  ]
}
```

Each user is an object contained in the users list. As you can see, the stored passwords are hashed. This is good, because in protects the users in case of a data breach. Even if an attacker obtains the hashed passwords, they would need significant computational resources and time to attempt to reverse the hashes and obtain the original passwords.

**6. Authenticate a user**

```typescript
await userList.authenticate("user1", "password1"); // Successful login
```

**7. Authenticate a user with a wrong password**

```typescript
await userList.authenticate("user1", "wrongpassword"); // Failed login
```

**8. Find if a username exists**

```typescript
userList.usernameExists("user2"); // true
```

**9. Get a user by username**

```typescript
userList.getUserByUsername("user3");
```

The method will return the user object or `undefined` if it doesn't exist in the list

```typescript
User {
  username: 'user3',
  password: '$2b$10$bRyXZ7RK73lF3PDl7.d6bOlnRlyFF3yf3hIst.Zg4HppokQ96m7Ki'
}
```

**10. Remove a user**

```typescript
userList.removeUserByUsername("user3");
```

We can verify that `user3` was removed by `console.log(userList)`

```typescript
userAuth {
  users: [
    User {
      username: 'user1',
      password: '$2b$10$S1tNMxIeTupCSU1ICQPJG./DpPklSTxkGjBQvAsK2jVJVnbQdCH6y'
    },
    User {
      username: 'user2',
      password: '$2b$10$9LmQDXi9N4t62YLbXqbaaOqbc/F1BeyRXmdQmxXtp0vOFKGL80AtW'
    }
  ]
}
```

test
