const core = require("@actions/core");
const jsonwebtoken = require("jsonwebtoken");

async function oidctoken() {
  const id_token = await core.getIDToken();
  // decode the id_token
  const decoded = jsonwebtoken.decode(id_token, { complete: true });

  console.info("..................ID_TOKEN..........................");
  console.info(decoded);
  console.info("...........................................");
}

module.exports = {
  oidctoken,
};
