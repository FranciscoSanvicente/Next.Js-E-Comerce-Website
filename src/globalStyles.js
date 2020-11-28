import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    
    
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scrollbar-width: thin;
  scroll-behavior: smooth;
  font-family: 'Poppins', sans-serif;
 } 
 html {
   width:130vw;
 }
 @media screen and (min-width: 500px) {
  html {
   width:100vw;
 }
 }
 
*::-webkit-scrollbar {
  display: none;
}
*::-webkit-scrollbar-track {
  background: #fff;
}
*::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
}
.bannerwraper {
  .brandwrap {
		display: none !important;
	}
	@media screen and (min-width: 992px) {
		display: flex;
    justify-content:space-between;
		.brandwrap {
      z-index:10;
      background:#fff;
			display: block !important;
			width: 20%;
      padding-left:.7rem;
      border-radius: 0.4rem;
		}
	}
}

`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width:119vw;
  
  @media only screen and (min-width: 490px) {
  padding-left: 10px;
  padding-right: 10px;
  width: 90%;
  }

  @media only screen and (min-width: 768px) {
    width: 720px;
    max-width: 100%;
  }
  @media only screen and (min-width: 992px) {
    width: 960px;
    max-width: 100%;
  }
  @media only screen and (min-width: 1200px) {
    width: 1180px;
    max-width: 100%;
}
  }
`;

export default GlobalStyle;
