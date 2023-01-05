const core = require("@actions/core");
const allTasks = require("./main");

function parseInput() {
  const input = core.getInput("tasks");
  let tasksArray = input.split(",").map((task) => task.trim());
  //   validate that the task array is a comma separated list of tasks
  
}

module.exports = {
  parseInput,
};
