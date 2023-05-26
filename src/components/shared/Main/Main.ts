import { styled } from 'styled-components';
import { GRAY_500, WHITE } from '../../../utils/constants';

export const Main = styled.section`
	@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
	font-family: 'Rubik', sans-serif;
	font-size: 16px;
	box-sizing: border-box;
	width: 100%;
	padding: 16px;
	min-height: 100vh;
	background-color: #f2f2f2;

	p {
		margin: 0;
		padding: 0;
	}

	body {
		font-family: Tahoma, Arial, sans-serif;
		font-size: 14px;
		margin: 0;
		padding: 0;
	}

	.loader-wrap {
		width: 100%;
		margin: 24px 0;
		display: flex;
		justify-content: center;
	}

	// Container display flex
	.container {
		align-items: center;
		background-color: #f9f9f9;
		display: flex;
		height: 100%;
		justify-content: center;
		max-width: 100%;
		min-height: 100vh;
		position: relative;
	}

	.add-to-cart {
		display: flex;
		gap: 12px;
		align-items: center;
		border-radius: 50px;
		background-color: ${WHITE};
		color: #ff7f50;
		font-size: 13px;
		font-weight: bold;
		padding: 15px 40px;
		text-transform: uppercase;
		text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
		margin-bottom: 32px;
		border: none;

		&:focus {
			background-color: ${GRAY_500};
			color: ${WHITE};
		}

		ion-icon {
			width: 25px;
			height: 25px;
		}
	}
`;

export const Title = styled.h2`
	@import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@600&display=swap');
	font-family: 'Albert Sans', sans-serif;
	font-weight: bold;
	color: ${GRAY_500};
	padding: 16px 0;
	font-size: 3rem;
	margin-bottom: 16px;
	display: flex;
	align-items: center;
	gap: 13px;
`;
