import React from 'react';
import { MdStar, MdStarHalf } from 'react-icons/md';
import { timeStamps } from '../../utilits';
import { BsEye } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { CgMenuLeft } from 'react-icons/cg';

const Product = ({ product, carousels }) => {

  

  return (
    <div className='product'>
      <div className='product-top'>
        <div className='product-img'>
          <img
            src={`/img/${product.img}.png`}
            alt='laptop'
            className='image-active'
          />
        </div>
        <div className='product-carousel'>
          <div className='carousel-slide'>
            {carousels.map((carousel, index) => {
              return (
                <div className='img-carousel' key={index}>
                  <img
                    src={`/img/${carousel.img}.png`}
                    alt='laptop'
                    className='image-right'
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='product-description'>
        <div className='stars'>
          <MdStar className='star-checked' />
          <MdStar className='star-checked' />
          <MdStar className='star-checked' />
          <MdStarHalf className='star-checked' />
          <MdStar className='star' />
        </div>
        <div className='product-title'>{product.title}</div>
        <div className='product-p'>{product.description}</div>
        <div className='price'>
          <span className='real-price'>{product.price}</span>
          <span className='dis-count'>-5%</span>{' '}
          <span className='net-price'>$82.09</span>
        </div>
        <div className='time'>
          {timeStamps.map((time, index) => {
            return (
              <div className='time-unit' key={index}>
                <div
                  className={
                    time.color ? 'time-count time-active' : 'time-count'
                  }
                >
                  {time.count}
                </div>
                <div className='time-title'>{time.title}</div>
              </div>
            );
          })}
        </div>
        <div className='buttons-list'>
          <button className='addCart'>add to cart</button>
          <button className='icon-list'>
            <FiHeart />
          </button>
          <button className='icon-list'>
            <CgMenuLeft />
          </button>
          <button className='icon-list'>
            <BsEye />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
