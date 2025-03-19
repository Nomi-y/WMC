import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const app = new Hono();
const student = {
    name: "John",
    age: 20,
    filme: [
        "Avatar",
        "Matrix",
        "Interstellar",
        "Fear and Loathing in Las Vegas",
    ],
};
const book = {
    name: "Harry Potter",
    author: {
        name: "JK Rowling",
        age: 99,
    },
    pages: 100000,
};

// serve index.html
app.get("/", serveStatic({ path: "./static/index.html" }));
app.get("/student", async (c) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return c.json(student);
});
app.get("/book", async (c) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return c.json(book);
});
app.get("*", serveStatic({ root: "./static" }));

Deno.serve(app.fetch);
