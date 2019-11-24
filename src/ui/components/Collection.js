import React, { useState } from 'react'
import Item from './Item'

const Collection = ({ items }) => {
  const [itemsCollection, updateCollection] = useState(items)
  const [image, updateImage] = useState('/img/logo.png')
  return (
    <React.Fragment>
      <button onClick={(e) => updateCollection([...itemsCollection.slice(0, itemsCollection.length - 1)])}>Remove (-)</button>
      <input type="test" value={image} onChange={(e) => updateImage(e.target.value)}/>
      <button onClick={(e) => updateCollection([...itemsCollection, ''])}>Add (+)</button>
      <section className='container'>
        {
          itemsCollection.map((item, indice) => (
            <div className='item'>
              <Item key={indice} title={`Card n°${indice}`} image={image}/>
            </div>
          ))
        }
      </section>
    </React.Fragment>
  )
}

export default Collection
