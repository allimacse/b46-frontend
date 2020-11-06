import React from 'react'
import {PriceFormat} from '../../pipes/index'

const PriceList = ({ prices }) => {
  console.log(prices)

  return (
    <React.Fragment>
      <ul>
        {
          prices.map((item, itemIndex) => {
            return (
              <li key={`item_${itemIndex}`}>
                {item.item}: {PriceFormat(item.price)}
              </li>
            )
          })
        }
      </ul>
    </React.Fragment>
  )
}

export default PriceList

