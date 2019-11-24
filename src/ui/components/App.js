import React from 'react'
import Collection from './Collection'

const App = ({ counterTotal }) => <Collection items={[...Array(counterTotal)]}/>

export default App
