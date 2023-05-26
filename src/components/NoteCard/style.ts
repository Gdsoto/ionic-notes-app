import { styled } from 'styled-components';
import { GRAY_200, GRAY_500, WHITE } from '../../utils/constants';

export const CardWrapper = styled.section`
	background-color: ${WHITE};
	width: 100%;
	display: flex;
	box-shadow: 0px 0px 1px rgba(48, 49, 51, 0.05),
		0px 4px 8px rgba(48, 49, 51, 0.1);
	border-radius: 8px;
	margin-bottom: 24px;
	flex-direction: column;

	.detail-wrap {
		padding: 16px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.name-wrap {
			@import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@600&display=swap');
			font-family: 'Albert Sans', sans-serif;
			font-weight: bold;
			color: ${GRAY_500};
			font-size: 24px;
		}

		ion-icon {
			width: 26px;
			height: 26px;
			color: ${WHITE};
		}
	}

	.button-wrap {
		display: flex;
		gap: 13px;
		justify-content: end;
		align-items: center;
	}
`;
