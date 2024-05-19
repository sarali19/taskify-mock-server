import express from "express";
import {
  getProjectsHandler
} from "../handlers/projects.js";

export const projectsRouter = express.Router();


projectsRouter.get("/projects", getProjectsHandler);
