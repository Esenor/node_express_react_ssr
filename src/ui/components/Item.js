import React, { useState } from 'react'

const Item = ({ title, image }) => {
  const [state, updateState] = useState(false)
  return (
    <React.Fragment>
      <article onClick={() => updateState(!state)}>
        <header>
          <span>{title}</span>
        </header>
        <section>
          <img className={(state) ? 'rotating' : null} src={image} alt="default image" />
        </section>
      </article>
    </React.Fragment>
  )
}

export default Item
