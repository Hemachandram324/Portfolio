import { Hono } from "hono";

// Define your environment bindings type here
type Env = {
  MY_SECRET?: string; // Example environment variable
  // Add more bindings as needed
};

const app = new Hono<{ Bindings: Env }>();

app.get("/", (c) => {
  return c.text("Hello from Hono Worker!");
});

export default app;
