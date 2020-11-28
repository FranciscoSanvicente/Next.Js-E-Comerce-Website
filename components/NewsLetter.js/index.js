import React, { useState } from 'react';
import styled from 'styled-components';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { colors } from '../../utilits/styles';
import { Container } from '../../src/globalStyles';
const NewsLetter = () => {
	const [email, setEmail] = useState('');

	const handleChange = (e) => {
		const value = e.target.value;
		setEmail(value);
	};
	const handleSubmit = () => {
			setEmail('');
			alert('successfully send your email');
	};
	return (
		<NewsWrapper>
			<Container>
				<div className='news-content'>
					<div className='news-titles'>
						<h4 className='news-letter'>news letter</h4>
						<h4 className='subscribe'>subscribe now</h4>
					</div>
					<div className='news-text'>
						Get Daily Updates Form Us Write Email ID Below
					</div>
					<form action='' onSubmit={handleSubmit}>
						<div className='from-icon'>
							<MdEmail />
						</div>
						<input
							className='input-form'
							type='email'
							name='email'
							placeholder='Enter your Email adress'
							required='required'
							value={email}
							onChange={handleChange}
						/>
						<button className='submit'>
							<HiOutlineArrowNarrowRight />
						</button>
					</form>
				</div>
			</Container>
		</NewsWrapper>
	);
};

const NewsWrapper = styled.div`
	background: ${colors.camea};
	padding: 1.3rem 0;

	.news-content {
		color: #fff;
		text-transform: capitalize;

		.news-letter {
			font-size: 15px;
			font-weight: 300;
		}
		.subscribe {
			font-size: 20px;
			letter-spacing: 1px;
			margin: 0.2rem 0 0.4rem;
		}

		.news-text {
			letter-spacing: 1px;
			font-size: 13px;
			font-weight: 300;
		}
	}

	form {
		display: flex;
		margin-top: 1rem;
		background: #fff;
		width: 97%;
		height: 2.5rem;
		box-sizing: border-box;
		padding-left: 0.5rem;
		border-radius: 0.3rem;

		.from-icon {
			color: ${colors.camea};
			padding: 0.6rem;
		}

		.input-form {
			border: none;
			padding: 0.5rem;

			width: 90%;
		}
		.input-form:focus,
		.input-form:hover {
			border: none;
			outline: none;
		}

		.submit {
			background: #000;
			justify-self: flex-end;
			width: 3.5rem;
			border: none;
			color: #fff;
			border-top-right-radius: 0.3rem;
			border-bottom-right-radius: 0.3rem;
			font-size: 1.7rem;
			padding-top: 0.15rem;
			cursor: pointer;
			:active,
			:focus {
				outline: none;
			}
		}
	}

	@media screen and (min-width: 992px) {
		.news-content {
			display: flex;
			height: 100%;
			align-items: center;
			justify-content: space-between;
		}
		form {
			width: 35%;
		}
	}
	@media screen and (min-width: 1200px) {
		.news-content {
			display: flex;
			height: 100%;
			align-items: center;
			justify-content: space-between;
		}
		form {
			width: 45%;
		}
	}
`;

export default NewsLetter;
