import styled from 'styled-components';
import { colors } from '../../utilits/styles';

export const ButtonModel = styled.div``;

export const FeatureWrapper = styled.div`
  .model-cart {
    display:none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    z-index: 200;
    overflow-y: auto;
  }
  .open {
    display:block;
	background-color: rgba(0, 0, 0, 0.1);
  }
  .button-model {
	display:flex;
	align-items:center;
	background-color: rgba(0, 0, 0, 0.1);

  }
  .cart-content {
    background: #fff;
    margin: 2rem auto;
    padding-bottom: 1.5rem;
    letter-spacing:1px;
    width: 80%;
    border-radius:.5rem;
    overflow-y: auto;
  }
  .add-cart {
	  height:100%;
  }
  .buttons-content{
	width: 90%; 
	display:flex;
	align-items:center;
	justify-content:space-around;
	padding-top:1.3rem;
  }
  .cart-header {
    display: flex;
    justify-content: space-between;
    padding: 0.7rem;
    border-bottom: solid 1px #e3e3e3;
    margin-bottom: 1rem;
    .title {
      display: flex;
      color: #4cbb6c;
      width: 90%;
      font-weight: 600;
    }
    .tick-icon {
      font-weight: 600;
      font-size: 20px;
    }
    .title-text {
      margin-left: 0.3rem;
    }
  }
.img-wrap{
  display:flex;
  justify-content:center;
}
  .img-top {
    background: ${colors.lightGrey};
    margin: 1rem auto;
    padding: 4rem 2.5rem;
    border-radius: 0.3rem;

    .img-top-img {
      width:11rem;
    }
  }
  .cart-info {
    margin-left: 1rem;
    text-transform: capitalize;
  }
  .info-price {
    color: ${colors.camea};
    font-weight: 500;
    margin: 0.5rem 0;
  }
  .info-content {
    font-size:12px;
    color: ${colors.grey};
    
    
  }
  .info-content strong {
    font-size:13px;
    color:#333;
    margin-right:2px;
    line-height:1.5rem;

  }
  .little-info {
    margin:.9rem 0;
    font-weight:600;
    letter-spacing:1.5px;
    border-bottom: solid 1px #e3e3e3;
    padding-bottom:.9rem;
  }

  .cart-checkout {
    margin-left: 1rem;
  }

  .cart-buttons {
    display: flex;

    .btn-cart{
      font-size: 15px;
      margin:.5rem .5rem .5rem 0;
      padding:.6rem 1rem;
      border: none;
      border-radius: 0.3rem;
      cursor: pointer;
      background: #000000;
      color: #fff;
      text-transform: capitalize;
      transition: all .5s ease;
    }
    .shoping-btn {
      background: ${colors.camea};
    }
    .shoping-btn:hover {
      background: #000000;
    }
    .check-btn:hover {
      background: ${colors.camea};
    }
  }

  @media screen and (min-width: 830px) {
    .cart-content {
     
      width:90%;
    }
	.buttons-content{
	width: 70%; 
  }
	
	.add-cart {
	 height:65%;
	}
    .cart-main {
      display:flex;
      margin-left:1rem;
    }
    .cart-buttons{
     flex-direction:column;
    }
    .cart-top {
      display:flex;
      width:45%;
    }
    .img-top {
    background: ${colors.lightGrey};
    margin:0;
    padding:1.5rem 1rem;
    height:60%;
    border-radius: 0.3rem;

    .img-top-img {
      min-width:10rem;
    }
  }
  .cart-checkout  {
    width:50%;
    border-left: solid 1px #e3e3e3;
    margin-left:2rem;
    padding-left:2rem;
  }


  @media screen and (min-width: 1200px) {
	.buttons-content{
	width: 50%; 
  }
    .img-top {
    background: ${colors.lightGrey};
    margin:0;
    padding:3rem 1rem 2rem;
    height:100%;
    width:14rem;
    border-radius: 0.3rem;

    .img-top-img {
      min-width:12rem;
    }
  }
  }
`;

export const FeaturesHearder = styled.div`
	margin-top: 3rem;
	margin-bottom: 1.5rem;
	height: 100%;

	.featues-header {
		display: flex;
		justify-content: space-between;
		position: relative;
	}
	.features-title {
		font-size: 20px;
	}
	.features-nav {
		display: flex;
		justify-content: space-between;
	}
	.features-ul {
		position: absolute;
		left: 0;
		top: 2.5rem;
		display: flex;

		.feature-items {
			list-style: none;
		}
		.feature-items:nth-child(2) {
			margin: 0 1rem;
		}
		.feature-links {
			text-decoration: none;
			font-size: 13px;
			color: #000;
			cursor: pointer;
		}
		.feature-links:hover {
			color: ${colors.camea};
		}
		.active {
			color: ${colors.camea};
		}
	}
	.icon-left {
		margin-right: 0.5rem;
	}
	.feature-icon {
		padding: 0.3rem 0.5rem;
		background: transparent;
		border: 0.5px solid rgba(0, 0, 0, 0.2);
		border-radius: 2px;
		:hover {
			background: ${colors.camea};
			border: none;
		}
		:active,
		:focus {
			outline: none;
		}
	}
	.icon {
		margin-top: 0.2rem;
		margin-right: 0.1rem;
	}
	@media screen and (min-width: 576px) {
		.features-ul {
			position: static;
			margin-right: 1.5rem;
		}
	}
`;

export const FeatureCard = styled.div`
	width: 100%;
	margin-top: 3rem;
	overflow: hidden;
	.card-slder-wrap {
		width: 100%;
		overflow: hidden;
		transition: all 0.5s ease;
	}

	.office-lap {
		display: none;
	}
	.card-slider {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 300%;
		flex-shrink: 0;
		margin-bottom: 2rem;
		transition: all 0.5s ease;
	}

	.feature-cards {
		cursor: pointer;
		position: relative;
		background: ${colors.lightGrey};
		padding: 1.5rem 0;
		width: 16%;
		margin-bottom: 1rem;
		flex-shrink: 0;
		height: 17.5rem;
		border-radius: 0.7rem;
		.feature-top {
			width: 100%;
			height: 7.5rem;
			display: flex;
			flex-shrink: 0;
			justify-content: center;
			align-items: center;
			position: relative;
		}
		.image-active {
			position: absolute;
			width: 80%;
			height: 90%;
			transition: all 0.5s ease;
		}
		.image-hover {
			align-items: center;
			position: absolute;
			height: 70%;
			width: 0;
			opacity: 0;
			transform: translateY(-90deg);
			transition: all 0.5s ease;
		}
	}
	.feature-cards:hover .image-hover {
		width: 70%;
		opacity: 1;
		transform: translateY(-90deg);
		transition: all 0.5s ease;
	}
	.feature-cards:hover .image-active {
		width: 0;
		opacity: 0;

		transition: all 0.5s ease;
	}
	.feature-cards:hover .buttons-list {
		opacity: 1;
	}
	.buttons-list {
		position: absolute;
		display: flex;
		flex-direction: column;
		margin-left: auto;
		top: 0.3rem;
		right: 0.3rem;
		opacity: 0;
		transition: all 0.7s ease;
	}
	.icon-list {
		cursor: pointer;
		font-size: 14px;
		margin-bottom: 0.4rem;
		width: 1.7rem;
		text-align: center;
		height: 1.7rem;
		padding-top: 0.2rem;
		border: none;
		border-radius: 0.3rem;
		background: #000000;
		color: #fff;
		text-transform: capitalize;
		transition: all 0.5s ease;
		/* opacity: 0; */
		z-index: 10;
	}
	.icon-list:hover {
		background: ${colors.camea};
		color: #fff;
		transition: all 0.3s ease;
	}
	.icon-list:active,
	.icon-list:focus {
		outline: none;
		border: none;
	}

	.footer {
		padding: 1rem 0 0 1.5rem;
	}
	.footer-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.price {
			margin-right: 1rem;
			color: ${colors.camea};
			font-weight: 500;
		}
	}
	.footer-title {
		text-transform: capitalize;
		font-size: 13px;
		margin: 0.4rem 0;
		height: 1.5rem;
	}

	.star {
		color: #cccccc;
	}

	.star-checked {
		color: #ffb700;
	}
	.addCart {
		font-size: 13px;
		width: 5rem;
		float: right;
		margin-right: 1rem;
		margin-top: 0.5rem;
		cursor: pointer;
		height: 1.9rem;
		border: none;
		border-radius: 0.3rem;
		background: ${colors.camea};
		color: #fff;
		text-transform: capitalize;
		:hover {
			background: #000;
		}
		:active,
		:focus {
			outline: none;
		}
	}
	@media screen and (min-width: 550px) {
		margin-top: 0;
		.feature-cards {
			height: 18rem;
		}
	}

	@media screen and (min-width: 669px) {
		.card-slider {
			width: 200%;
		}
	}
	@media screen and (min-width: 992px) {
		.features-grid {
			display: grid;
			grid-template-columns: 1fr 5fr;
			grid-gap: 1rem;
		}
		.office-lap {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			background: left / cover no-repeat url('/img/office-1.jpg');
			height: 28rem;
			padding: 5rem 0.5rem;
			position: relative;
			font-size: 12px;
			color: ${colors.lightGrey};
			border-radius: 0.3rem;
			.content {
				z-index: 10;
			}
			.office-title {
				font-size: 19px;
				text-transform: capitalize;
				font-weight: 700;
				line-height: 1.5rem;
				color: #fff;
			}
			.offcice-p {
				margin-top: 0.5rem;
			}
			.office-btn {
				z-index: 10;
				background: ${colors.camea};
				border: none;
				padding: 0.4rem 0.9rem;
				font-size: 12px;
				text-transform: uppercase;
				border-radius: 1.5rem;
				color: #fff;
			}
		}
		.office-lap::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border-radius: 0.3rem;
			/* background: rgba(247, 247, 247, 0.2); */
			background: rgba(0, 0, 0, 0.3);
		}
	}

	@media screen and (min-width: 1200px) {
		.card-slider {
			width: 150%;
		}
		.office-lap {
			height: 33rem;
		}
	}
`;
