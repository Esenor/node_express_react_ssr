import React, { useState } from 'react'

const Item = ({ title, image, onUp, onDown, id }) => {
  const [state, updateState] = useState(false)
  return (
    <React.Fragment>
      <article>
        <header>
          <span>{title}</span>
        </header>
        <section>
          <img src={image} alt="default image" />
        </section>
        <button onClick={() => onDown(id)}>-</button>
        <button onClick={() => onUp(id)}>+</button>
      </article>
    </React.Fragment>
  )
}

export default Item
