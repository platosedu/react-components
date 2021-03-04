import { string } from 'rollup-plugin-string'
import { terser } from 'rollup-plugin-terser'
import analyze from 'rollup-plugin-analyzer'
import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import json from '@rollup/plugin-json/dist'
import postcss from 'rollup-plugin-postcss'
import progress from 'rollup-plugin-progress'
import resolve from 'rollup-plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'

const input = ['src/index.tsx']

const name = 'ReactComponents'

const external = [
  'react',
  'react-dom',
  'classnames',
  'react-lazy-load-image-component',
  'react-device-detect',
  'react-select',
  'glider-js',
]

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
}

const plugins = [
  // progress(),
  typescript({
    include: [
      // Project files
      './**/*.ts+(|x)'
      // Files from outside of the project
      // '../../javascript/**/*.ts+(|x)'
    ]
  }),
  string({ include: '**/*.html' }),
  json(),
  postcss({
    extract: true,
    autoModules: true,
    include: '**/*\.s(a|c)ss',
    extensions: ['.css', '.scss'],
  }),
  resolve({
    customResolveOptions: {
      moduleDirectory: 'src',
    },
  }),
  babel({
    exclude: 'node_modules/**',
    presets: ['@babel/env', '@babel/preset-react'],
  }),
  terser(),
  analyze(),
  filesize(),
]

const outputData = [
  {
    file: pkg.browser,
    format: 'umd',
  },
  {
    file: pkg.main,
    format: 'cjs',
  },
  {
    file: pkg.module,
    format: 'es',
  },
]

const config = outputData.map(({ file, format }) => ({
  input,
  output: {
    file,
    format,
    name,
    globals,
  },
  external,
  plugins,
}))

export default config
