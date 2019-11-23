require('@babel/register')({
  presets: ['@babel/preset-react', '@babel/preset-env']
})

module.exports = require('./server/server.js')