import React from 'react';

const Service = ({ service }) => {
  return (
    <div className='service-grid'>
      <div className='service-icon'>{service.icon}</div>
      <div className='services-content'>
        <div className='service-title'>{service.title}</div>
        <div className='service-p'>{service.description}</div>
      </div>
    </div>
  );
};

export default Service;
