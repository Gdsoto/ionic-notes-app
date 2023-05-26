import styled from 'styled-components';
import { GRAY_200 } from '../../utils/constants';

export const LoaderWrapper = styled.section`
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
	background-color: #f3f3f3;

	ion-icon {
		margin-bottom: 20px;
		width: 100px;
		height: 100px;
		color: ${GRAY_200};
	}

	.loader-text {
		font-size: 30px;
		color: ${GRAY_200};
		text-align: center;
	}
`;
