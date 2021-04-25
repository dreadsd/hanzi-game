const express = require('express');
const webpack = require('webpack');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.listen(3000);
