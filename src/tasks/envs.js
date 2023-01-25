async function logEnvs() {
  let allEnvs = process.env;
  //return JSON.stringify(allEnvs, null, 2);
  return allEnvs;
}

module.exports = {
  envs: logEnvs,
};
