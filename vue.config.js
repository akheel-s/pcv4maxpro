/* eslint-disable @typescript-eslint/no-var-requires */
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

export const transpileDependencies = ['vuetify'];
export const pluginOptions = {
  apollo: {
    lintGQL: true
  }
};
export function configureWebpack(config) {
  // get a reference to the existing ForkTsCheckerWebpackPlugin
  const existingForkTsChecker = config.plugins.filter(
    p => p instanceof ForkTsCheckerWebpackPlugin
  )[0];

  // remove the existing ForkTsCheckerWebpackPlugin
  // so that we can replace it with our modified version
  // eslint-disable-next-line no-param-reassign
  config.plugins = config.plugins.filter(p => !(p instanceof ForkTsCheckerWebpackPlugin));

  // copy the options from the original ForkTsCheckerWebpackPlugin
  // instance and add the memoryLimit property
  const forkTsCheckerOptions = existingForkTsChecker.options;
  forkTsCheckerOptions.memoryLimit = process.env.MEMORY_LIMIT;

  config.plugins.push(new ForkTsCheckerWebpackPlugin(forkTsCheckerOptions));
}
