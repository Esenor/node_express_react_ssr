import React, { useState } from 'react'
import Item from './Item'

const Collection = ({ items }) => {
  const [itemsCollection, updateCollection] = useState(items)
  return (
    <React.Fragment>
      <button onClick={(e) => updateCollection([...itemsCollection, ''])}>+</button>
      <button onClick={(e) => updateCollection([...itemsCollection.slice(0, itemsCollection.length - 1)])}>-</button>
      {
        itemsCollection.map((item, indice) => (
          <Item key={indice} />
        ))
      }
    </React.Fragment>
  )
}

export default Collection
