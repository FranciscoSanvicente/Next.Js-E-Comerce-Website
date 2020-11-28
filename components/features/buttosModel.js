import { ImCross } from 'react-icons/im';
const ButtonsModel = ({ setOPenmodels, text }) => {
	return (
		<div className='cart-content buttons-content'>
			<div className='title'>{text}</div>
			<div
				className='cross-icon'
				onClick={() => setOPenmodels(false)}
				style={{ cursor: 'pointer' }}
			>
				<ImCross />
			</div>
		</div>
	);
};

export default ButtonsModel;
