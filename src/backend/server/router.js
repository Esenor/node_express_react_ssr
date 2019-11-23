import defaultHandler from '../handlers/default'

export function registerServer (server) {
  const routes = [
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
