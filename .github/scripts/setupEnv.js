const core = require('@actions/core');
const { setEnvironmentVariable } = require('./envCreator');
const environmentVariables = require('./envVars');
const branchRef = process.env.GITHUB_REF;
const branchRefSplit = branchRef.split('/')
const branch = branchRefSplit[branchRefSplit.length - 1]
let exportEnv = environmentVariables[branch].variables;

(async () => {
  try {
    for (const i of exportEnv) {
      console.log(i);
      setEnvironmentVariable(i.key, i.value);
    }
  } catch (error) {
    core.setFailed(error.message);
    process.exit(1);
  }
})();
