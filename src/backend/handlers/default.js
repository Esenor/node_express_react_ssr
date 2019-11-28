import React from 'react'
import { render } from '../server/renderer'
import { renderToString } from 'react-dom/server'
import App from '../../ui/components/App'
import request from 'request'

const handler = async (req, res) => {
  const mode = req.params.mode
  const templateName = (mode === 'ssr') ? 'ssrTemplate' : 'defaultTemplate'
  const frontUiName = 'app'
  const tierlist = await getApiValue()
  
  const ssrApp = renderToString(
    <React.Fragment>
      <App tierList={ tierlist }/>
    </React.Fragment>
  )

  let preloadedData = {
    tierList: tierlist
  }

  res.end(render(templateName, ssrApp, preloadedData, frontUiName))
}

export default handler

const getApiValue = async () => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: 'http://localhost:3001/api/v1'
    }
    request(options, function (error, response, body) {
      resolve(JSON.parse(body))
    })
  })
}
