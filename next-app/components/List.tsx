import * as React from 'react'
import ListItem from './ListItem'

const List = ({ items }: any) => {
 return (
  <ul>
    {items && items.map((item: any, index: number) => (
      <li key={index}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)}

export default List
