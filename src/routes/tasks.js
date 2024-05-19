import express from "express";
import {
  createTaskHandler,
  getTasksByIdHandler,
  getTasksHandler,
  deleteTaskByIdHandler
} from "../handlers/tasks.js";

export const tasksRouter = express.Router();

// Get tasks
tasksRouter.get("/tasks", getTasksHandler);
// Get task by id
tasksRouter.get("/tasks/:taskId", getTasksByIdHandler);
// Create many tasks
tasksRouter.post("/tasks", createTaskHandler);
// Delete a task
tasksRouter.delete("/tasks/:taskId", deleteTaskByIdHandler);