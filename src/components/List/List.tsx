import React from 'react'
import Item from '../Item/Item'

export default function List(props: any) {
  return (
    <div className="list">
      <h3>{props.title}</h3>
      <ul>
        {props.data.map((item: any, index: number) => (
          <Item
            key={index}
            name={item.name}
            md1={props.getMd1 ? props.getMd1(item) : ''}
            md2={props.getMd2 ? props.getMd2(item) : ''}
            md3={props.getMd3 ? props.getMd3(item) : ''}
            onHover={props.setItemImage(item.image)}
          />
        ))}
      </ul>
    </div>
  )
}
