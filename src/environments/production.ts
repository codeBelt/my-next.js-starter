import environment, { Environment } from './base';

/*
 * base.ts is the default environment for production.
 * You shouldn't have to override anything.
 */

const env = environment();

const productionEnv: Environment = {
  ...env,
};

export default productionEnv;
