import React from 'react';
import styled from 'styled-components';

const Spining = ({ spining }) => {
	return (
		<SpiningWrap>
			<div className={spining ? 'spining spining-active' : 'spining'}>
				<img src='/img/spinner.gif' alt='spinner' />
			</div>
		</SpiningWrap>
	);
};

const SpiningWrap = styled.div`
	.spining {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		display: none;
	}
	.spining-active {
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}
`;

export default Spining;
