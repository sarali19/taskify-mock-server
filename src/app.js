import express, { json } from "express";
import { tasksRouter } from "./routes/tasks.js";
import { projectsRouter } from "./routes/projects.js";

const app = express();

app.use(json({ limit: "5mb" }));

app.use((request, response, next) => {
  // Allowed sources and headers
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  response.header(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, OPTIONS"
  );
  return next();
});

app.use(tasksRouter);
app.use(projectsRouter);

app.listen(8000, () => {
  console.log("Server started at http://localhost:8000");
});
