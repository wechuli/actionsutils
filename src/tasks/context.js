const core = require("@actions/core");
const github = require("@actions/github");

async function context() {
  const context = github.context;
  console.info(context);
}

module.exports = {
  context,
};
