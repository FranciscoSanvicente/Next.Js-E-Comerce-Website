import React from 'react';
import styled from 'styled-components';
import { colors } from '../utilits/styles';

const DetailBaner = () => {
	return (
		<DetailBranerwrapper>
			<div className='banner-content'>
				<div className='text1'>home</div>
				<div className='text2'>Product detail</div>
			</div>
		</DetailBranerwrapper>
	);
};

const DetailBranerwrapper = styled.div`
	display: block;
	background: ${colors.lightGrey};
	height: 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 14px;
	text-transform: capitalize;
	.banner-content {
		display: flex;

		.text2 {
			margin-left: 0.4rem;
			padding-left: 0.4rem;
			border-left: solid 1.5px #000;
		}
	}
`;

export default DetailBaner;
