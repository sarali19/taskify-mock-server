import { projects } from "../projectdata.js";
import { ApiError } from "../utils/Error.js";
import { delay } from "../utils/delay.js";

export async function getProjectsHandler(req, res) {
  const result = await delay(() => {
    return projects;
  });
  res.send(result);
}