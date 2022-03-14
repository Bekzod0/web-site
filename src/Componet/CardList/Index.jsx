import React from 'react'
import Card from '../Card/Card'
import '../../App.css'
export const CardList = ({citieList}) => {
  return (
    <div className='cardlist'>
    {
      citieList.map(city => <Card key={city} city={city}/>)
    }
  </div>
  )
}
