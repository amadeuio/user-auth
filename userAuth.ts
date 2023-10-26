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

  // Verify a password
  async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  // Authenticate a user
  async authenticate(username: string, password: string): Promise<string> {
    // Object with user data, or undefined if it doesn't exists
    const user = this.users.find((user) => user.username === username);

    // If user doesn't exists, return
    if (!user) return "Authentication failed. Please check your username and password.";

    const passMatch = await this.verifyPassword(password, user.password);

    if (passMatch) {
      return "You can successfully log in.";
    } else {
      return "Authentication failed. Please check your username and password.";
    }
  }

  // Check if a username already exists
  usernameExists(username: string): boolean {
    return this.users.some((user) => user.username === username);
  }
}

// Example usage:
const userList = new userAuth();

userList.registerUser("user2", "password2").then(() => {
  userList.authenticate("user2", "password2").then((authentication) => {
    console.log(authentication);
  });
});

export {};
