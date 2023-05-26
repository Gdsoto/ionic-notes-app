import { useHistory } from 'react-router';
import { BackWrapper } from './style';
import { IonIcon } from '@ionic/react';
import { arrowBackOutline, documentLockOutline } from 'ionicons/icons';

const BackButton = ({ arrow = false, retroceso = true }) => {
	const history = useHistory();

	const navigate = () => {
		history.push('/notes');
	};

	return (
		<BackWrapper>
			<div className="icon">
				<IonIcon icon={documentLockOutline}></IonIcon>
			</div>
			{retroceso && (
				<div className="icon" onClick={() => navigate()}>
					<IonIcon icon={arrowBackOutline}></IonIcon>
				</div>
			)}
		</BackWrapper>
	);
};

export default BackButton;
