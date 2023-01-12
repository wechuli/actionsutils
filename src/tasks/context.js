const core = require("@actions/core");
const github = require("@actions/github");

async function context() {
  const context = JSON.stringify(github.context, null, 2);
  return context;
}

module.exports = {
  context,
};
