const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const webpack = require("webpack");
const path = require("path");

// module.exports = withPlugins([[withImages]], {
//   webpack(config, options) {
//     config.resolve.modules.push(path.resolve("./"));
//     return config;
//   },
// });

const nextConfig = {
    reactStrictMode: false,
    webpack: (config) => {
        config.resolve.modules.push(path.resolve("./"));
        return config;
    },
  }

module.exports = async (phase, { defaultConfig }) => 
    withPlugins([withImages], nextConfig)(phase, { ...defaultConfig, ...nextConfig });
