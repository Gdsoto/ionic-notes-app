import { Button } from '../../components/shared/Button/Button';
import { Main, Title } from '../../components/shared/Main/Main';
import { useHistory } from 'react-router';
import BackButton from '../../components/shared/BackButton/BackButton';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { changeLogState } from '../../context/slices/authSlice';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { provider } from '../../firebase';
import { FormWrap } from '../../components/shared/Form/Form';
import { IonIcon } from '@ionic/react';
import { logoGoogle } from 'ionicons/icons';

const Login = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const auth = getAuth();

	const login = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				toast.success('Bienvenido! ' + result.user.displayName);
				dispatch(changeLogState(true));
				history.push(`/dash`);
			})
			.catch((error) => {
				toast.error('Usuario o contraseña incorrecta');
				console.log(error);
			});
	};

	return (
		<Main>
			<BackButton retroceso={false} />
			<FormWrap>
				<Title>Iniciar sesión</Title>
				<IonIcon icon={logoGoogle}></IonIcon>
				<Button type="button" onClick={login}>
					Iniciar sesión con google
				</Button>
			</FormWrap>
		</Main>
	);
};

export default Login;
