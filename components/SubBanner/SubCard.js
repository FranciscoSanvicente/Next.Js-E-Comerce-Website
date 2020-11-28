import React from 'react';

const SubCard = ({ inverse, subbanner }) => {
  return (
    <div className='subcard' inverse={inverse}>
      <div className='subcard-img'>
        <img src={`/img/${subbanner.img}.png`} alt=''/>
      </div>
      <div className='subtcard-content'>
        <p> {subbanner.pretitle}</p>
        <div className='subcard-title'>{subbanner.title}</div>
      </div>
    </div>
  );
};

export default SubCard;
