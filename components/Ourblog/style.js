import styled from 'styled-components';
import { colors } from '../../utilits/styles';

export const BlogHearder = styled.div`
	margin-bottom: 3rem;
	height: 100%;

	.featues-header {
		display: flex;
		justify-content: space-between;
		position: relative;
	}
	.features-title {
		font-size: 20px;
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

export const BlogCardWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	overflow: hidden;
	.blog-slider {
		width: 250%;
		display: flex;
		justify-content: space-between;
		flex-shrink: 0;
		transition: all 0.5s;
	}

	.blog-card {
		width: 19%;
		flex-shrink: 0;
	}

	.card-top {
		width: 100%;
		border-radius: 0.3rem;
		height: 9rem;
		position: relative;
		color: #fff;
		overflow: hidden;
		font-size: 1.7rem;
	}

	.img-top {
		width: 100%;
		height: 100%;
		transition: all 0.4s ease-in-out;
	}

	.search-icon {
		position: absolute;
		bottom: 1rem;
		left: 34%;
		z-index: 10;
		opacity: 0;
		transition: all 0.4s ease-in-out;
	}

	.cogs-icon {
		position: absolute;
		top: 1rem;
		right: 34%;
		opacity: 0;
		z-index: 10;
		transition: all 0.4s ease-in-out;
	}

	.card-top::after {
		content: '';
		display: none;
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.6);
	}
	.blog-card:hover .card-top::after {
		display: block;
	}

	.blog-card:hover .img-top {
		transform: scale(1.2);
	}
	.blog-card:hover .search-icon {
		transform: translateY(-2.7rem);
		opacity: 1;
	}
	.blog-card:hover .cogs-icon {
		transform: translateY(2.7rem);
		opacity: 1;
	}

	.blog-title {
		font-size: 13px;
		font-weight: 700;
		text-transform: capitalize;
		margin: 0.8rem 0;
		width: 200px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		/* resize: horizontal; */
	}
	.blog-p {
		font-size: 12px;
		color: ${colors.grey};
		a {
			color: ${colors.camea};
			text-transform: capitalize;
			font-size: 13px;
			margin-left: 2px;
		}
	}

	.blog-likes {
		margin: 2rem 0;
		display: flex;
		border-bottom: 1px solid #e3e3e3;
		border-top: 1px solid #e3e3e3;
		color: ${colors.grey};
		font-size: 14px;
		text-transform: capitalize;
		padding: 0.5rem 0;

		.date,
		.likes {
			height: 100%;
			width: 100%;
			display: flex;
			align-items: center;
		}
		.date {
			width: 120%;
		}

		.likes {
			margin-left: 0.5rem;
			padding-left: 0.5rem;
			border-left: 1.5px solid #e3e3e3;
		}
		p {
			margin-left: 0.4rem;
		}
	}
	@media screen and (min-width: 415px) {
		.card-top {
			height: 12rem;
		}
		.search-icon {
			left: 36%;
		}
		.cogs-icon {
			right: 36%;
		}
		.blog-card:hover .search-icon {
			transform: translateY(-4rem);
			opacity: 1;
		}
		.blog-card:hover .cogs-icon {
			transform: translateY(4rem);
			opacity: 1;
		}
	}

	@media screen and (min-width: 576px) {
		.card-top {
			height: 12rem;
		}
		.search-icon {
			left: 39%;
		}
		.cogs-icon {
			right: 39%;
		}
		.blog-card:hover .search-icon {
			transform: translateY(-4rem);
			opacity: 1;
		}
		.blog-card:hover .cogs-icon {
			transform: translateY(4rem);
			opacity: 1;
		}
	}
	@media screen and (min-width: 768px) {
		.search-icon {
			left: 41%;
		}
		.cogs-icon {
			right: 41%;
		}
	}
	@media screen and (min-width: 992px) {
		.blog-slider {
			width: 168%;
		}
		.search-icon {
			left: 40%;
		}
		.cogs-icon {
			right: 40%;
		}
	}
`;
