import defaultTemplate from '../templates/default'
import demoSsrApp from '../app/demo'

const handler = (req, res) => {
  const reactApp = demoSsrApp()
  const renderedApp = reactApp.ssrRenderedApp
  const preloadedData = reactApp.preloadedData
  const frontLibraryName = 'Efc'
  res.end(defaultTemplate(renderedApp, preloadedData, frontLibraryName))
}

export default handler
