import React, { useState } from 'react'

const Item = ({title}) => {
  const [state, updateState] = useState(false)
  return (
    <React.Fragment>
      <article onClick={() => updateState(!state)}>
        <header>
          <span>{title}</span>
        </header>
        <section>
          <img className={(state) ? 'rotating' : null} src="/img/logo.png" alt="default image" />
        </section>
      </article>
    </React.Fragment>
  )
}

export default Item
