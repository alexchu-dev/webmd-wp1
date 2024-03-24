/** @type {import('next').NextConfig} */

import webpack from "webpack"
import { config as dotenvConfig } from "dotenv"

const { parsed: myEnv } = dotenvConfig()

const nextConfig = {
  // output: "export",
  // basePath: '/wp1',
  images: { unoptimized: true },
  // async headers() {
  //   return [
  //     {
  //       source: "/api/(.*)",
  //       headers: [
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "*" }, 
  //         {
  //           key: "Access-Control-Allow-Methods",
  //           value: "GET,DELETE,PATCH,POST,PUT",
  //         },
  //         {
  //           key: "Access-Control-Allow-Headers",
  //           value:
  //             "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  //         },
  //       ],
  //     },
  //   ]
  // },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
    return config
  },
}

export default nextConfig

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
