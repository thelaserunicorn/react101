import React, { useState } from 'react';

const Tour = ({id,image,info,price,name, removeTour}) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <article className='single-tour'>
      <img src={image}/>
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>{name}</h4>
        </div>
        <p>
          {readMore?info:`${info.substring(0,200)}...`}
          <button onClick={()=>setReadMore(!readMore)}>
            {readMore?'show less':'read more'}
          </button>
        </p>
        <button onClick={()=>removeTour(id)} className='delete-btn'>Delete</button>
      </footer>
    </article>

  );
};

export default Tour;
