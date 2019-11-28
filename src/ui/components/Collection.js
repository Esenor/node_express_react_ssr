import React, { useState } from 'react'
import Item from './Item'

const Collection = ({ items }) => {
  const [itemsCollection, updateCollection] = useState(items)
  //
  const upgradeRank = (id) => {
    updateCollection(itemsCollection.map(item => {
      if (item.id === id) {
        switch (item.rank) {
          case 's':
            item.rank = 's'
            break
          case 'a':
            item.rank = 's'
            break
          case 'b':
            item.rank = 'a'
            break
          case 'c':
            item.rank = 'b'
            break
          case 'f':
            item.rank = 'c'
            break
        }
      }
      return item
    }))
  }
  //
  const downgradeRank = (id) => {
    updateCollection(itemsCollection.map(item => {
      if (item.id === id) {
        switch (item.rank) {
          case 's':
            item.rank = 'a'
            break
          case 'a':
            item.rank = 'b'
            break
          case 'b':
            item.rank = 'c'
            break
          case 'c':
            item.rank = 'f'
            break
          case 'f':
            item.rank = 'f'
            break
        }
      }
      return item
    }))
  }
  //
  const buildDomizedTierList = (collection) => {
    const orderedCollection = collection.reduce((tierList, item) => {
      tierList[item.rank].push(item)
      return tierList
      }, { s: [], a: [], b: [], c: [], f: [] })
      return Object.keys(orderedCollection).map(rank => (
        <section key={rank}>
          <div className="rankrow">
            <label className="rankname">{rank}</label>
            {
              orderedCollection[rank].map((item, indice) => (
                <div className='item' key={`${item.rank}-${indice}`}>
                  <Item id={item.id} title={item.name} image={item.picture} onUp={upgradeRank} onDown={downgradeRank}/>
                </div>
              ))
            }
          </div>
        </section>
      ))
    }
  //
  return (
    <React.Fragment>
      <section className='container'>
        { buildDomizedTierList(itemsCollection) }
      </section>
    </React.Fragment>
  )
}

export default Collection
