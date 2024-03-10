/** @type {import('next').NextConfig} */

import webpack from 'webpack';
import { config as dotenvConfig } from 'dotenv';

const { parsed: myEnv } = dotenvConfig();

const nextConfig = {
  output: "export",
  basePath: '/wp1',
  images: { unoptimized: true },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    return config;
  },
};

export default nextConfig;

// import dotenv from "dotenv"
// import path from "path"
// import {fileURLToPath} from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// dotenv.config({ path: path.join(__dirname, "/.env") })

// const nextConfig = {
//   webpack: (config, options) => {
//     config.module.rules.push({})

//     return config
//   },
// }
// export default nextConfig