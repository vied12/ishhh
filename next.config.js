const withCSS = require('@zeit/next-css')
const withESLint = require('next-eslint')

module.exports =
  withESLint(
    withCSS({
      webpack(config, options) {
        const { isServer } = options;
        config.module.rules.push({
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg|JPG|jpeg|gif)$/,
          // exclude: nextConfig.exclude,
          use: [
            {
              loader: require.resolve("url-loader"),
              options: {
                limit: 8192,
                fallback: require.resolve("file-loader"),
                publicPath: `/_next/static/images/`,
                outputPath: `${isServer ? "../" : ""}static/images/`,
                name: "[name]-[hash].[ext]",
                esModule: false
              }
            }
          ]
        });
        return config
      },
    })

)
