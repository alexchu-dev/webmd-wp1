/** @type {import('next').NextConfig} */

import webpack from 'webpack';
import { config as dotenvConfig } from 'dotenv';

const { parsed: myEnv } = dotenvConfig();

const nextConfig = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    return config;
  },
};
 
export default nextConfig;