import { styled } from 'styled-components';
import { GRAY_800, PINK_700, WHITE } from '../../../utils/constants';

export const Button = styled.button`
	@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
	font-family: 'Rubik', sans-serif;
	background-color: #ff7f50;
	border: 1px solid #ff7f50;
	font-size: 16px;
	border-radius: 8px;
	padding: 14px 20px;
	color: ${WHITE};

	&:focus {
		color: ${WHITE};
		background-color: ${GRAY_800};
	}
`;

export const OutlineButton = styled.button`
	@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
	font-family: 'Rubik', sans-serif;
	background-color: transparent;
	border: 1px solid ${GRAY_800};
	font-size: 16px;
	border-radius: 8px;
	padding: 14px 20px;
	color: ${GRAY_800};
`;

export const LinkButton = styled.button`
	@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
	font-family: 'Rubik', sans-serif;
	background-color: transparent;
	border: none;
	font-size: 16px;
	border-radius: 8px;
	padding: 14px 20px;
	color: ${PINK_700};
`;
