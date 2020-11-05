const express = require('express');
const yargs = require('yargs');
const path = require('path');

const DEFAULT_HOST = '0.0.0.0';
const argv = yargs
  .option('int', {
    description: 'Use integration API',
    type: 'boolean',
    default: false,
  })
  .option('port', {
    alias: 'p',
    description: 'port',
    type: 'number',
    default: 30000,
  }).argv;
const app = express();

app.use('/public', express.static('./public'));
app.get('*', (_, res) => {
  res.sendFile(path.resolve('./public/index.html'));
});
app.listen(argv.port, DEFAULT_HOST, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server started at ${DEFAULT_HOST}:${argv.port}`);
});
