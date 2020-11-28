import React from 'react';

const LinkContent = ({ content }) => {
  
  const { icon, text } = content;

  return (
    <>
      {icon ? (
        <div className='last-link'>
          <div className='inner-icon'>{content.icon}</div>
          <a href='' className='inner-items inner-item'>
            {text}
          </a>{' '}
        </div>
      ) : (
        <div className='inner-links'>
          <a href='' className='inner-items'>
            {text}
          </a>{' '}
        </div>
      )}
    </>
  );
};

export default LinkContent;
