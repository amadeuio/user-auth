import * as bcrypt from "bcrypt";

class User {
  constructor(public username: string, public password: string) {}
}

class userAuth {
  private users: { username: string; password: string }[];

  constructor() {
    this.users = [];
  }

  // Hash a password
  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  // Register a new user with a hashed password
  async registerUser(username: string, password: string): Promise<void> {
    const hashedPassword: string = await this.hashPassword(password);
    const user = new User(username, hashedPassword);
    this.users.push(user);
  }

  // Authenticate user
  // method here ...
}

// Example usage:
const userList = new userAuth();

// Register a user and log users list
userList.registerUser("user1", "password1").then(() => {
  console.log(userList);
});

export {};
