import { tasks } from "../taskdata.js";
import { ApiError } from "../utils/Error.js";
import { delay } from "../utils/delay.js";

export async function getTasksHandler(req, res) {
  const result = await delay(() => {
    return tasks;
  });
  res.send(result);
}

export async function getTasksByIdHandler(req, res) {
  const { taskId } = req.params;
  const result = await delay(() => {
    return tasks.find((task) => task.id == taskId);
  });
  if (result) {
    res.send(result);
  } else {
    res.status(400).json(new ApiError("Task not found!", 400));
  }
}

export async function createTaskHandler(req, res) {
  const newTask = req.body;
  await delay(() => {
    tasks.unshift({
      ...newTask,
      id: `TASK-${String(tasks.length + 1).padStart(4, "0")}`,
    });
  });

  res.send(newTask);
}

export async function deleteTaskByIdHandler(req, res) {
  const { taskId } = req.params;
  await delay(() => {
    const indexToRemove = tasks.findIndex((item) => item.id == taskId);

    if (indexToRemove !== -1) {
      tasks.splice(indexToRemove, 1);
    }
  });
  res.send(tasks);
}

