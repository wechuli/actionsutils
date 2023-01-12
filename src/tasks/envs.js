function logEnvs() {
  let allEnvs = process.env;
  return JSON.stringify(allEnvs, null, 2);
}

module.exports = {
  envs: logEnvs,
};
