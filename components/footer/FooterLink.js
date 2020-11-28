import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import LinkContent from './LinkContent';

const FooterLink = ({ footerLinks }) => {
  const [dwopDown, setDrop] = useState(false);
  const handletoggle = () => {
    setDrop((dwopDown) => !dwopDown);
  };
  return (
    <>
      <div className='footer-links'>
        <div className='footer-list' onClick={handletoggle}>
          <div className='footer-title'>{footerLinks.title}</div>
          <div className='down-arrow'>
            <MdKeyboardArrowDown className='arrow' />
          </div>
        </div>

        <div className={dwopDown ? 'content active-list' : 'content'}>
          {footerLinks.content.map((content, index) => (
            <LinkContent key={index} content={content} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FooterLink;
