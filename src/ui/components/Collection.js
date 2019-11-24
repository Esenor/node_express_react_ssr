import React, { useState } from 'react'
import Item from './Item'

const Collection = ({ items }) => {
  const [itemsCollection, updateCollection] = useState(items)
  return (
    <React.Fragment>
      <button onClick={(e) => updateCollection([...itemsCollection, ''])}>Add (+)</button>
      <button onClick={(e) => updateCollection([...itemsCollection.slice(0, itemsCollection.length - 1)])}>Remove (-)</button>
      <section className='container'>
        {
          itemsCollection.map((item, indice) => (
            <div className='item'>
              <Item key={indice} title={`Card n°${indice}`}/>
            </div>
          ))
        }
      </section>
    </React.Fragment>
  )
}

export default Collection
