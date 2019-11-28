require('@babel/register')(
  {
    'presets': [
      [
        '@babel/env',
        {
          'targets': {
            'node': '10'
          }
        }
      ], '@babel/react']
  }
)
module.exports = require('./server/server.js')
