import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../../shared/components/App'

const counter = 2
const ssrRenderedApp = renderToString(<App counterTotal={counter} />)

const get = () => (
  {
    preloadedData: {
      counter,
      foo: {
        bar: "some da'ta",
        sting: 's"t"o"n"k'
      }
    },
    ssrRenderedApp
  }
)

export default get
