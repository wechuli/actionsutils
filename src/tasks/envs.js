function logEnvs() {
  let allEnvs = process.env;
  JSON.stringify(allEnvs, null, 2);
  console.log(".................ENV..........................");

  console.info(allEnvs);

  console.log("............................................");
}

module.exports = {
  envs: logEnvs,
};
