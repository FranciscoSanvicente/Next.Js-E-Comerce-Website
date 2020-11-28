import React from 'react';
import { FaCogs, FaSearch, FaRegCalendarAlt } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
const BlogCard = ({ blog }) => {
  return (
    <div className='blog-card'>
      <div className='card-top'>
        <img src={`/img/blog-${blog.img}.jpg`} alt='' className='img-top' />
        <FaSearch className='search-icon' />
        <FaCogs className='cogs-icon' />
      </div>
      <div className='blog-content'>
        <div className='blog-title'>{blog.title}</div>
        <div className='blog-p'>
          {blog.text}
          <a href='#'>Read more</a>
        </div>
      </div>
      <div className='blog-likes'>
        <div className='date'>
          <FaRegCalendarAlt />
          <p>{blog.date}</p>
        </div>
        <div className='likes'>
          <FiHeart />
          <p>{blog.hit} hit</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
