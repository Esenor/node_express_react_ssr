import defaultHandler from '../handlers/default'
import apiHandler from '../handlers/api'
import jsHandler from '../handlers/js'

export function registerServer (server) {
  const routes = [
    {
      method: 'all',
      path: '/api/v1',
      handler: apiHandler
    },
    {
      method: 'all',
      path: '/serve/dist/js/:filename',
      handler: jsHandler
    },
    {
      method: 'all',
      path: '/app/:mode',
      handler: defaultHandler
    }
  ]

  routes.forEach(({ method, path, handler }) => {
    server[method](path, handler)
  })
}
