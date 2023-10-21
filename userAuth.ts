import * as bcrypt from "bcrypt";

class User {
  constructor(public username: string, public password: string) {}
}

class userAuth {
  private users: { username: string; password: string }[];

  constructor() {
    this.users = [];
  }

  // Register a new user with a hashed password
  async registerUser(username: string, password: string): Promise<string> {
    const hashedPassword = password; // Temporary
    const user = new User(username, hashedPassword);
    this.users.push(user);
    return "Registration successful. You can now log in.";
  }

  // Hash a password
  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }
}

// Example usage:
const users = new userAuth();

(async () => {
  await console.log(users.registerUser("user1", "password1"));
  console.log(users);
})();

export {};
