const core = require("@actions/core");
const alltasks = require("./tasks/main");
const { parseInput } = require("./utils/utils");

async function run() {
  try {
    const tasks = parseInput();
    console.log(tasks);
    for (const task of tasks) {
      alltasks[task]();
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
