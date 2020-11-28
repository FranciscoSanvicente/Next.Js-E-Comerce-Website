import React, { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ourBlogs } from '../../utilits';
import BlogCard from './BlogCard';
import { BlogHearder, BlogCardWrapper } from './style';

const Ourblog = () => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    const slide = ref.current;
    if (width >= 992) {
      slide.scrollLeft += slide.offsetWidth / 2.9;
    } else {
      slide.scrollLeft += slide.offsetWidth / 1.99;
    }
    if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth) {
      slide.scrollLeft = 0;
    }
  };
  const previouSide = () => {
    const slide = ref.current;
    if (width >= 992) {
      slide.scrollLeft -= slide.offsetWidth / 2.9;
    } else {
      slide.scrollLeft -= slide.offsetWidth / 1.99;
    }
    if (slide.scrollLeft <= 0) {
      slide.scrollLeft = slide.scrollWidth;
    }
  };

  return (
    <>
      <BlogHearder>
        <div className='featues-header'>
          <h2 className='features-title'>Visit Our Blog</h2>
          <div className='feature-arrows'>
            <button className='feature-icon icon-left' onClick={previouSide}>
              <FiChevronLeft className='icon' />
            </button>
            <button className='feature-icon icon-right' onClick={nextSlide}>
              <FiChevronRight className='icon' />
            </button>
          </div>
        </div>
      </BlogHearder>
      <BlogCardWrapper ref={ref}>
        <div className='blog-slider'>
          {ourBlogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </BlogCardWrapper>
    </>
  );
};

export default Ourblog;
