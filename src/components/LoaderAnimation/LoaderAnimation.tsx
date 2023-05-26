import React from 'react';
import { LoaderWrapper } from './style';
import { IonIcon } from '@ionic/react';
import { documentTextOutline } from 'ionicons/icons';

const LoaderAnimation = () => {
	return (
		<LoaderWrapper>
			<IonIcon icon={documentTextOutline}></IonIcon>
			<p className="loader-text">Mis Notas</p>
		</LoaderWrapper>
	);
};

export default LoaderAnimation;
