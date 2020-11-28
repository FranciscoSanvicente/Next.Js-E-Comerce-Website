import React from 'react'
import { Slide } from './styles';

const Hero = ({hero , children}) => {
    return (
        <Slide>
           <header className={hero}>{children}</header>
        </Slide>
       
    )
}

Hero.defaultProps = {
    hero: "defaultHero"
  };

export default Hero
