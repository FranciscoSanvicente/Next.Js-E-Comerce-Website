import { BiSupport, BiWorld } from 'react-icons/bi';
import { GrDeliver, GrMoney } from 'react-icons/gr';
import { MdLocationOn, MdLocalHospital, MdEmail } from 'react-icons/md';
import {
	FaFax,
	FaFacebookF,
	FaYoutube,
	FaInstagram,
	FaTwitter,
	FaGooglePlusG,
} from 'react-icons/fa';
export const Navheader = [
	{
		id: 1,
		title: 'home',
		link: '/',
	},
	{
		id: 2,
		title: 'laptops',
		link: '/detailPage',
	},
	{
		id: 3,
		title: 'delivery',
		link: '/deliveryPage',
	},

	{
		id: 4,
		title: 'legal active',
		link: '/legalPage',
	},
	{
		id: 5,
		title: 'secure payment',
		link: '/paymentPage',
	},
	{
		id: 6,
		title: 'more',
		link: '/more',
	},
];

export const brands = [
	'mac os',
	'toshiba',
	'sumsong',
	'dell',
	'lenova',
	'hp',
	'accer',
];

export const togglebar = [
	{
		id: 1,
		title: 'laptop brands',
		link: '/',
	},
	{
		id: 2,
		title: 'mac os',
		link: '/',
	},
	{
		id: 3,
		title: 'toshiba',
		link: '/',
	},

	{
		id: 4,
		title: 'sumsong',
		link: '/',
	},
	{
		id: 5,
		title: 'dell',
		link: '/',
	},
	{
		id: 6,
		title: 'lenova',
		link: '/',
	},
	{
		id: 7,
		title: 'accer',
		link: '/',
	},
];
/* 
'laptop brands',
	'mac os',
	'toshiba',
	'sumsong',
	'dell',
	'lenova',
	'hp',
	'accer',
	'more categories',
	'home',
	'featured',
	'shipment',
	'delivery',
	'legal active',
	'secure payment',
	'more',




*/
export const SocialMedia = [
	<FaFacebookF />,
	<FaTwitter />,
	<FaYoutube />,
	<FaGooglePlusG />,
	<FaInstagram />,
];

export const PaymentBrands = [
	<img src='/img/visa.png' alt='visa-card' />,
	<img src='/img/maestro.png' alt='maestro-card' />,
	<img src='/img/american_express.png' alt='american_express-card' />,
	<img src='/img/master_card.png' alt='master-card' />,
	<img src='/img/paypal.png' alt='paypal-card' />,
];

export const OurService = [
	{
		icon: <GrDeliver />,
		title: 'same Day Delivery',
		description: 'somalia Orders Only',
	},
	{
		icon: <BiSupport />,
		title: 'Best Online Support',
		description: 'Hours : 7AM - 10PM',
	},
	{
		icon: <BiWorld />,
		title: 'WorldWide Free Delivery',
		description: 'For Order Over $100',
	},
	{
		icon: <GrMoney />,
		title: 'Money Back Guarantee',
		description: 'Enter Now',
	},
];

export const timeStamps = [
	{
		title: 'days',
		count: '714',
	},
	{
		title: 'hours',
		count: '17',
	},
	{
		title: 'min',
		count: '51',
	},
	{
		title: 'sec',
		count: '14',
		color: true,
	},
];

// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, sapiente natus quibusdam culpa aliquid animi voluptatibus eaque, nisi voluptates doloremque nobis sed soluta tempora quasi aspernatur numquam rem ipsam placeat.
export const ourBlogs = [
	{
		title: 'consectetur adipisicing elit',
		text:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, sapiente natus quibusdam culpa aliquid animi voluptatibus eaque nisi voluptates.',
		img: 1,
		date: '25 october',
		hit: 15,
	},
	{
		title: 'aliquid animi voluptatibus eaque',
		text:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, sapiente natus quibusdam culpa aliquid animi voluptatibus eaque nisi voluptates.',
		img: 2,
		date: '16 november',
		hit: 17,
	},
	{
		title: 'sapiente natus quibusdam culpa',
		text:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, sapiente natus quibusdam culpa aliquid animi voluptatibus eaque nisi voluptates.',
		img: 3,
		date: '26 sebtember',
		hit: 26,
	},
	{
		title: 'Lorem ipsum dolor sit',
		text:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, sapiente natus quibusdam culpa aliquid animi voluptatibus eaque nisi voluptates.',
		img: 4,
		date: '21 december',
		hit: 22,
	},
	{
		title: 'quibusdam culpa aliquid animi',
		text:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, sapiente natus quibusdam culpa aliquid animi voluptatibus eaque nisi voluptates.',
		img: 5,
		date: '13 julay',
		hit: 12,
	},
];

export const FooterList = [
	{
		title: 'Quick Link',
		content: [
			{
				text: 'Seller Login',
			},
			{
				text: 'Seller Sign Up',
			},
			{
				text: 'Seller Handbook',
			},
			{
				text: 'Seller Control Panel',
			},
			{
				text: 'Seller Control Panel',
			},
		],
	},
	{
		title: 'Products',
		content: [
			{
				text: 'prices drop',
			},
			{
				text: 'new Products',
			},
			{
				text: 'best sales',
			},
			{
				text: 'contact us',
			},
			{
				text: 'sitemap',
			},
		],
	},
	{
		title: 'Our Company',
		content: [
			{
				text: 'delivery',
			},
			{
				text: 'legal notice',
			},
			{
				text: 'terms and conditions of use',
			},
			{
				text: 'about us',
			},
			{
				text: 'secure payment',
			},
		],
	},

	{
		title: 'your Acount',
		content: [
			{
				text: 'personal info',
			},
			{
				text: 'orders',
			},
			{
				text: 'credit slips',
			},
			{
				text: 'addresses',
			},
		],
	},

	{
		title: 'store information',
		content: [
			{
				icon: <MdLocationOn />,
				text: 'portable-laptops store USA',
			},
			{
				icon: <MdLocalHospital />,
				text: 'portable-laptops store USA',
			},
			{
				icon: <MdEmail />,
				text: 'portable-laptops store USA',
			},
			{
				icon: <FaFax />,
				text: 'portable-laptops store USA',
			},
		],
	},
];
