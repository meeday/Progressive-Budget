const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: "./public/index.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  mode: "development",
  plugins: [
    new WebpackPwaManifest({
      name: "Progressive Budget App",
      short_name: "Budget App",
      description: "An application that tracks a users budget",
      background_color: "#dddddd",
      theme_color: "#ffffff",
      "theme_color": "#ffffff",
      start_url: "/",
      icons: [
        {
          src: path.resolve("public/icons/icon-192x192.png"),
          sizes: [192, 512],
          destination: path.join("public", "icons")
        }
      ]
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }

      }
    ]
  }
};

module.exports = config;