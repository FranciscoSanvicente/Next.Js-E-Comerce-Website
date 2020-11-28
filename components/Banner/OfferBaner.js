import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utilits/styles';
import { rotate } from '../SubBanner/keyframes';

const OfferBaner = () => {
  return (
    <OfferWraper>
      <div className='offer-content'>
        <p className='offer-content-p'>HUGE DISCOUNT ALL OVER $100</p>
        <h2 className='offer-title'>Buy laptops & desks Online</h2>
      </div>
    </OfferWraper>
  );
};

const OfferWraper = styled.div`
  background: center / cover no-repeat url('/img/offer.jpg');
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  border-radius: 0.2rem;
  overflow: hidden;
  align-items: center;
  text-align: center;
  position: relative;
  margin-bottom: 2rem;
  height: 5rem;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    opacity: 0;
  }
  :hover::after {
    animation: ${rotate} 1s ease;
    opacity: 1;
  }
  .offer-content {
    z-index: 10;
  }
  .offer-content-p {
    display: none;
  }

  .offer-title {
    font-size: 17px;
    color: #fff;
    text-transform: capitalize;
  }
  @media screen and (min-width: 576px) {
    height: 6.5rem;
    .offer-content-p {
      display: block;
      color: ${colors.camea};
      font-size: 13px;
      letter-spacing: 1px;
    }

    .offer-title {
      font-size: 19px;
      word-spacing: 3px;
    }
  }
  @media screen and (min-width: 768px) {
    height: 7rem;
  }
  @media screen and (min-width: 992px) {
    height: 8.5rem;
  }
  @media screen and (min-width: 1200px) {
    height: 12rem;
    .offer-content-p {
      font-size: 15px;
    }

    .offer-title {
      font-size: 28px;
    }
  }
`;

export default OfferBaner;
