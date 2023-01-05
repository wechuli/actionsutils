const core = require("@actions/core");
const alltasks = require("./utils/main");
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
