import { IonContent, IonPage } from '@ionic/react';

const PageLayout = ({ children }: any) => {
	return (
		<IonPage>
			<IonContent fullscreen>{children}</IonContent>
		</IonPage>
	);
};

export default PageLayout;
