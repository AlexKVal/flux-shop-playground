var Main = require('./second.js');

module.exports = {
  log: console.log('just first.js'),
  mainLog: Main.log()
};
