import React from 'react'
import Collection from './Collection'

const App = ({tierList, preloaded}) => {
  tierList = (preloaded) ? preloaded.tierList : tierList
  return (
    <Collection items={tierList}/>
  )
}

export default App
