const core = require("@actions/core");
const allTasks = require("../tasks/main");

function parseInput() {
  const input = core.getInput("tasks") || "context";
  //
  let tasksArray = input.split(",").map((task) => task.trim());
  // validate that we support all the tasks
  for (const task of tasksArray) {
    if (!allTasks[task]) {
      // remove this task from the array
      
      throw new Error(`Unsupported task: ${task}`);
    }
  }
  return tasksArray;
}

module.exports = {
  parseInput,
};
