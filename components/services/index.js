import React from 'react';

import styled, { keyframes } from 'styled-components';

import { OurService } from '../../utilits';
import Service from './Service';
import { colors } from '../../utilits/styles';
const Services = () => {
  return (
    <ServicesWrapper>
      {OurService.map((service, index) => (
        <Service key={index} service={service} />
      ))}
    </ServicesWrapper>
  );
};

const iconAnimate = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;

const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;

  .service-grid {
    text-align: center;

    .service-icon {
      margin: auto;
      padding-top: 1rem;
      padding-bottom: 0.5rem;
      font-size: 1.5rem;
      width: 4rem;
      border-radius: 50%;
      background: ${colors.lightGrey};
    }
    .services-content {
      margin-top: 1rem;
      text-transform: capitalize;
    }
    .service-title {
      margin-bottom: 0.2rem;
      font-size: 14px;
      color: #000000;
    }
    .service-title:hover {
      color: ${colors.camea};
      transition: all 0.3s ease;
    }
    .service-p {
      font-size: 12px;
      color: #808080;
    }
  }
  .service-grid:hover .service-icon {
    animation: ${iconAnimate} 0.5s ease;
    background: ${colors.camea};
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default Services;
