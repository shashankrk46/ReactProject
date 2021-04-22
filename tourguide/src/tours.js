import React from 'react';

import Details from './Details'

function Tours(props, removeTour) {
  console.log(removeTour)

  return (
    <div>
      <h1>Our Tours</h1>

      {props.tour.map((items) => {
        return <Details key={items.id} items={items} removeTour={removeTour} />
      })}
    </div>
  )
}


export default Tours

