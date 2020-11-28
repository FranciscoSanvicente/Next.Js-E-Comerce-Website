import React from 'react';
import SubCard from './SubCard';
import styled from 'styled-components';
import OfferBaner from '../Banner/OfferBaner';
import { colors } from '../../utilits/styles';
import { rotate } from './keyframes';

const Subbaners = ({ inverse, subbanners }) => {
	return (
		<>
			<SubbanerWrapper>
				{subbanners.map((subbanner, index) => (
					<SubCard inverse={inverse} key={index} subbanner={subbanner} />
				))}
			</SubbanerWrapper>
		</>
	);
};
const SubbanerWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:1rem 0;
  .subcard {
    box-sizing: border-box;
    background: ${colors.lightGrey};
    width: 100%;
    height: 12rem;
    margin:0;
    position: relative;
    border-radius: 0.3rem;
    overflow: hidden;
    display: flex;
    flex-direction: ${(props) =>
			props.inverse === true ? 'row-reverse' : 'row'};
    justify-content: space-between;
    padding: 1rem;
    margin: .5rem 0;
    .subcard-img {
      width: 60%;
      height: 100%;

      ::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        border-radius: 0.3rem;
        height: 100%;
        background: rgba(205, 166, 127, 0.2);
        opacity: 0;
      }
      :hover::after {
        animation: ${rotate} 1s ease;
        opacity: 1;
      }

      img {
        margin-top: 0.5rem;
        width: 90%;
        height: 80%;
      }
    }
  }
  .subtcard-content {
    margin-top: 2rem;
    p {
      color: ${colors.camea};
      text-transform: capitalize;
      font-size: 12px;
      margin-bottom: 0.2rem;
    }

    .subcard-title {
      font-size: 1rem;
      font-weight: 500;
      text-transform: capitalize;
      span {
        display: block;
      }
    }
  }
  @media screen and (min-width: 490px) {
    .subcard {
      width: 95%;
    
  }
    } 
  @media screen and (min-width: 768px) {
    flex-direction: row;
    .subcard:not(:first-child) {
     margin-left:1rem;
    }

    .subcard {
      height: 6rem;
      
    }

    .subtcard-content {
    margin-top:0;
    p {
      font-size: 10px;
    }

    .subcard-title {
      font-size: 12px;
      font-weight: 500;
      text-transform: capitalize;

    }
  }

  @media screen and (min-width: 992px) {
    .subcard {
      height: 8rem;
      
    }
    .subtcard-content {
    p {
      font-size: 12px;
    }

    .subcard-title {
      font-size: 15px;
      font-weight: 600;
    }
  }
  @media screen and (min-width: 1200px) {
    .subcard {
      height: 10rem;
      
    }
    .subtcard-content {
    p {
      font-size: 12px;
    }

    .subcard-title {
      font-size: 17px;
      font-weight: 600;
    }
  }
`;
export default Subbaners;
