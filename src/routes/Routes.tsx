import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

// Components
import LoaderAnimation from '../components/LoaderAnimation/LoaderAnimation';
import AuthRoutes from './AuthRoutes';
import UnAuthRoutes from './UnAuthRoutes';

// Context
import { useSelector } from 'react-redux';
import { RootState } from '../context/store';
import useAnimation from '../Hooks/useAnimation';

const Routes = () => {
	const isAuth = useSelector((state: RootState) => state.auth.isAuth);
	const { animation } = useAnimation(4000);

	if (animation) {
		return <LoaderAnimation />;
	}

	return (
		<IonReactRouter>
			<IonRouterOutlet>
				{isAuth ? AuthRoutes() : UnAuthRoutes()}
			</IonRouterOutlet>
		</IonReactRouter>
	);
};

export default Routes;
