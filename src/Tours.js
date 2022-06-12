import React from 'react';
import Tour from './Tour';


const Tours = ({tours,removeTour}) => {
  return( 
    <section>
  <div className='title'>
  <h2>ours tours</h2>
  <div className='underline'/>
  <div>
    {tours.map(item => {
      return <Tour  key={item.id} {...item} removeTour={removeTour} />
    })}
  </div>
  </div> 
    </section>);
};

export default Tours;
