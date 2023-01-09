function logEnvs() {
  let allEnvs = process.env;
  JSON.stringify(allEnvs, null, 2);
}

module.exports = {
  envs: logEnvs,
};
