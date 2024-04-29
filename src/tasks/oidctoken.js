const core = require("@actions/core");
const jsonwebtoken = require("jsonwebtoken");

async function oidctoken() {
  const audience = core.getInput('audience');
  const id_token = audience ? await core.getIDToken(audience): await core.getIDToken();

  // decode the id_token
  const decoded = jsonwebtoken.decode(id_token, { complete: true });
  return decoded;
}

module.exports = {
  oidctoken,
};
