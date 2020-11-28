import React from 'react';
import styled from 'styled-components';
import { FooterList, SocialMedia, PaymentBrands } from '../../utilits';
import FooterLink from './FooterLink';
import { colors } from '../../utilits/styles';
import { Container } from '../../src/globalStyles';

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <Container>
          <UpperFooterWrapper>
            {FooterList.map((footerLinks, index) => (
              <FooterLink key={index} footerLinks={footerLinks} />
            ))}
          </UpperFooterWrapper>
          <LowerFooter>
            <div className='lower-content'>
              <div className='soical-media'>
                <ul>
                  {SocialMedia.map((meida, index) => {
                    return (
                      <li className='social-items' key={index}>
                        <a href='#' className='social-link'>
                          {meida}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className='copyRight copy-one'>
                © 2020 - Ecommerce software by Francisco Sanvicente
              </div>
              <div className='payment-methods'>
                <ul>
                  {PaymentBrands.map((payment, index) => {
                    return (
                      <li className='payment-items' key={index}>
                        <a href='#' className='payment-link'>
                          {payment}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className='copyRight copy-two'>
                © 2020 - Ecommerce software by Francisco Sanvicente
              </div>
            </div>
          </LowerFooter>
        </Container>
      </FooterWrapper>
    </>
  );
};

const FooterWrapper = styled.div`
  background: #000000;
  padding: 1.5rem 0;
`;

const UpperFooterWrapper = styled.div`
  border-bottom: 1px solid #3a3a3a;
  padding-bottom: 1.3rem;
  .footer-list {
    display: flex;
    justify-content: space-between;
    height: 2rem;
    align-items: center;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
  }
  .footer-title {
    font-size: 13px;
    text-transform: capitalize;
    margin-bottom: 0;
  }
  .down-arrow {
    font-size: 22px;
  }

  .content {
    height: 0;
    overflow: hidden;
    visibility: hidden;
    z-index: -1;
    transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s,
      z-index 0s linear 0.01s;
    .inner-links {
      display: flex;
      color: ${colors.camea};
    }

    .inner-items {
      color: ${colors.grey};
      text-decoration: none;
      font-size: 12px;
      text-transform: capitalize;
      line-height: 1.3rem;
    }
    .last-link {
      display: flex;
      color: ${colors.camea};

      .inner-item {
        margin-left: 0.8rem;
      }
    }
  }
  .active-list {
    height: 100%;
    visibility: visible;
    transition-delay: 0s, 0s, 0.3s;
  }
  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    .down-arrow {
      display: none;
    }
    .footer-list {
      display: block;
    }
    .content {
      display: block;
      height: 100%;
      visibility: visible;
      z-index: 1;
    }
    .inner-items {
      margin-bottom: 0.5rem;
    }
  }
`;

const LowerFooter = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  ul {
    display: flex;
    justify-content: space-around;
  }
  li {
    list-style: none;
  }
  a {
    color: #fff;
  }
  .soical-media {
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 1.5rem;
  }
  .social-items:hover {
    background: ${colors.camea};
    padding: 0.5rem 0.5rem 0.18rem 0.5rem;
    border-radius: 50%;
  }
  .payment-methods {
    margin: 0.5rem 0;
  }

  .copyRight {
    font-size: 12px;
  }
  .copy-one {
    display: none;
  }

  @media screen and (min-width: 992px) {
    padding-top: 0.7rem;
    padding-bottom: 0.5rem;
    display: block;
    .copy-one {
      display: block;
    }
    .copy-two {
      display: none;
    }
    .lower-content {
      display: flex;
      justify-content: space-between;
      height: 100%;
      padding-top: 1rem;
      align-items: center;
    }
    .soical-media {
      margin-top: 0;
      padding: 0;

      .social-items {
        margin-right: 1rem;
        font-size: 22px;
      }
    }
    .payment-items {
      margin-left: 0.5rem;
    }
  }
`;
export default Footer;
