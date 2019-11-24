import App from '../../ui/components/App'
import { hydrate } from 'react-dom'
import React from 'react'

const el = document.getElementById('app')
const data = JSON.parse(decodeURI(el.dataset.preloaded))

hydrate(<App counterTotal={data.counter}/>, el)
