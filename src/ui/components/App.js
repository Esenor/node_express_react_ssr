import React from 'react'
import Collection from './Collection'

const App = ({ counterTotal, preloaded}) => {
  counterTotal = (preloaded) ? preloaded.counter : counterTotal
  return (
    <Collection items={[...Array(counterTotal)].map(() => '')}/>
  )
}

export default App
