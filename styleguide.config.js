/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  sections: [
    {
      name: 'UI Components',
      components: './src/components/*/*.{jsx,tsx}',
      exampleMode: 'collapse',
      usageMode: 'collapse'
    }
  ],
  skipComponentsWithoutExample: true,
  require: [
    path.join(__dirname, './src/css/reset.scss'),
    path.join(__dirname, './src/css/tokens.scss'),
    path.join(__dirname, './node_modules/glider-js/glider.css')
  ],
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
  styles: {
    StyleGuide: {
      content: {
        maxWidth: 1440
      }
    }
  },
  webpackConfig: {
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        "node_modules"
      ]
    },
    module: {
      rules: [
        {
          test: /\.module\.s(a|c)ss$/,
          loader: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.s(a|c)ss$/,
          exclude: /\.module\.(s(a|c)ss)$/,
          loader: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.module\.css$/,
          loader: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          loader: ['style-loader', 'css-loader']
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/react', '@babel/typescript'],
                plugins: ['@babel/plugin-proposal-optional-chaining']
              }
            }
          ]
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: ['url-loader?limit=10000', 'img-loader']
        }
      ]
    }
  }
}
