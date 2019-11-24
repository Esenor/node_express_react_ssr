import React from 'react'
import { render } from '../server/renderer'
import { renderToString } from 'react-dom/server'
import App from '../../ui/components/App'

const handler = (req, res) => {
  const templateName = 'defaultTemplate'
  const frontUiName = 'app'
  
  const startValue = 5
  
  const ssrApp = renderToString(
    <React.Fragment>
      <App counterTotal={ startValue }/>
    </React.Fragment>
  )

  const preloadedData = {
    counter: startValue
  }

  res.end(render(templateName, ssrApp, preloadedData, frontUiName))
}

export default handler
