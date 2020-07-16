/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-param-reassign */
const os = require('os');

module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  chainWebpack: (config) => {
    config
      .plugin('fork-ts-checker')
      .tap((args) => {
        const totalmem = Math.floor(os.totalmem() / 1024 / 1024); // get OS mem size
        const allowUseMem = process.env.MEMORY_LIMIT || (totalmem > 2500 ? 2048 : 1000);
        args[0].memoryLimit = allowUseMem;
        return args;
      });
  },
  // parallel: require('os').cpus().length > 1,
};
