import defaultHandler from '../handlers/default'
import apiHandler from '../handlers/api'

export function registerServer (server) {
  const routes = [
    {
      method: 'all',
      path: '/api/v1',
      handler: apiHandler
    },
    {
      method: 'all',
      path: '/*',
      handler: defaultHandler
    }
  ]

  routes.forEach(({ method, path, handler }) => {
    server[method](path, handler)
  })
}
