// import nodePolyfills from 'rollup-plugin-node-polyfills';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import includePaths from 'rollup-plugin-includepaths';
import css from 'rollup-plugin-import-css';
import external from 'rollup-plugin-peer-deps-external';
import image from '@rollup/plugin-image';
import copy from 'rollup-plugin-copy'

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.css'];

const config = {
  input: './src/package.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      exports: 'named',
      sourcemap: true
    },
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    image(),
    // nodePolyfills(),
    includePaths({
      include: {},
      paths: ['src', 'src/', 'src/components', 'src/theme'],
      // external: Object.keys(pkg.dependencies), package.json file is pkg
      extensions: ['.js', '.json', '.html', '.ttf', '.css'],
    }),
    css(),
    resolve({
      browser: true,
      extensions
    }),
    // copy({
    //   targets: [
    //     { src: 'src/assets', dest: 'dist/' }
    //   ]
    // }),
    commonjs({
      include: /node_modules/,
      namedExports: {
        // 'react-is': Object.keys(ReactIs),
        // 'react': Object.keys(React),
        // 'react-dom': Object.keys(ReactDOM),
        '@apollo/client': [
          'ApolloProvider',
          'ApolloClient',
          'HttpLink',
          'InMemoryCache',
          'useQuery',
          'gql',
        ],
        'styled-components': ['styled', 'css', 'ThemeProvider'],
      },
    }),
    babel({
      babelrc: true,
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
    }),
    external(),
    terser(),
  ],
  // external: ['react'],
};

export default config;