import url from 'postcss-url'
import copy from 'rollup-plugin-copy'
import { terser } from 'rollup-plugin-terser'
import analyze from 'rollup-plugin-analyzer'
import fileSize from 'rollup-plugin-filesize'
import json from '@rollup/plugin-json/dist'
import postcss from 'rollup-plugin-postcss'
import progress from 'rollup-plugin-progress'
import typescript from 'rollup-plugin-typescript2'
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
  progress(),
  typescript({
    typescript: require('typescript'),
  }),
  json(),
  postcss({
    extract: true,
    autoModules: true,
    include: '**/*\.s(a|c)ss',
    extensions: ['.css', '.scss'],
    plugins: [
      url({
        url: 'inline',
        maxSize: 10,
        fallback: 'copy'
      })
    ]
  }),
  copy({
    targets: [
      { src: 'src/css/tokens.css', dest: 'dist/' },
      { src: 'src/css/reset.css', dest: 'dist/' }
    ]
  }),
  terser(),
  analyze(),
  fileSize(),
]

const outputData = [
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
