import React from 'react';

import './list.css'

const List = ({ people }) => {

  return (
    <div className='list'>
      <img className='img' src={people.image} alt={people.name}></img>
      <h1>{people.name}</h1>

      <p>{people.age} years</p>

    </div>
  )
}

export default List;
