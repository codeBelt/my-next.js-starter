import environment, { Environment } from './base';

const env = environment();

const developmentEnv: Environment = {
  ...env,
  // override anything that gets added from base.
};

export default developmentEnv;
