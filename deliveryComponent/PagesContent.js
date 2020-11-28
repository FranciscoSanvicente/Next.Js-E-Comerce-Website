import React from 'react';
import styled from 'styled-components';
import { colors } from '../utilits/styles';

const PagesContent = ({ title, subtitle }) => {
	return (
		<ContentWrap>
			<div className='title'>{title}</div>
			<div className='subtitle'>{subtitle}</div>
			<div className='paragraphs'>
				<p className='p-one'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
					aperiam sint? Aperiam, vero ratione vel laudantium ipsam unde saepe,
					sit est quidem provident harum quaerat a possimus praesentium amet
					aut. Quo ea aut ipsam quibusdam rerum eum ab non dolores perferendis
					eos doloremque quaerat cupiditate fugiat omnis nostrum dicta ipsum
					facilis explicabo dignissimos facere modi, cum qui exercitationem.
					Consectetur, libero! Saepe nobis ex nisi perspiciatis facilis rerum,
					est quod, ipsum, esse aliquid tempora? Magni quas iusto ipsam officia
					nulla placeat quibusdam sit? Maiores praesentium dicta eligendi omnis
					tenetur debitis atque! Facere aut deleniti doloribus blanditiis
					voluptates accusantium officia corporis. Architecto aut voluptatem,
					reiciendis asperiores corporis, assumenda quisquam eligendi eaque
					alias id velit corrupti ad unde nostrum recusandae tenetur quas illum!
				</p>
				<p className='p-two'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti vel
					veniam tenetur pariatur similique nemo eaque optio, deserunt magni
					animi tempore quos exercitationem odit laudantium perferendis,
					reiciendis impedit in. Perspiciatis. Atque rerum quisquam minus
					doloremque amet veritatis magnam voluptatum reprehenderit
					voluptatibus, sed sint similique inventore obcaecati quis optio animi
					at iste corrupti aspernatur magni maxime dolorem aliquam. Minus,
					beatae molestiae. Molestiae temporibus id accusamus exercitationem
					porro ipsa ad, quis debitis. At sapiente officia eum quisquam, earum
					perferendis distinctio quidem dolor adipisci nemo nihil magni minus
					maiores repellendus illo temporibus voluptatum!
				</p>
			</div>
		</ContentWrap>
	);
};

const ContentWrap = styled.div`
	margin: 2rem 0;
	.title {
		text-transform: capitalize;
		font-size: 2rem;
		font-weight: 500;
		margin-bottom: 0;
	}

	.subtitle {
		color: ${colors.grey};
		font-size: 1rem;
		margin-top: 0;
		margin-bottom: 0.7rem;
	}
	.paragraphs {
		font-size: 13px;
		line-height: 26px;
		color: ${colors.grey};
		letter-spacing: 0.7px;
		font-weight: 400;
	}
	.p-two {
		margin-top: 1rem;
	}
`;
export default PagesContent;
