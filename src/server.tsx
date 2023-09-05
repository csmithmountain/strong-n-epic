import { createServer, Model, Factory, Server } from "miragejs";

// Define your user model
interface User {
  username: string;
  password: string;
  role: string;
}

export function makeServer({ environment = "test" } = {}): Server {
  let server = createServer({
    environment,

    models: {
      // Define the Mirage.js user model with TypeScript types
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      // Define a user factory to generate mock data
      user: Factory.extend<User>({
        username: "",
        password: "",
        role: "",
      }),
    },

    seeds(server) {
      server.create("user", { username: "admin", password: "admin", role: "admin" });
      // Create mock users using the factory
      server.createList("user", 5);
    },

    
  });

  return server;
}
