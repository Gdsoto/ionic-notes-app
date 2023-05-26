import { Main, Title } from '../../components/shared/Main/Main';
import BackButton from '../../components/shared/BackButton/BackButton';
import { useEffect, useState } from 'react';
import { FormWrap } from '../../components/shared/Form/Form';
import { Loader } from '../../components/shared/Loader/Loader';
import { IonIcon } from '@ionic/react';
import {
	documentAttachOutline,
} from 'ionicons/icons';
import NotesApi from '../../services/api';
import { PetWrapper } from './style';
import PageLayout from '../../components/Layout/PageLayout';


import { Button } from '../../components/shared/Button/Button';
import { useHistory } from 'react-router';

export interface Iresources {
	url: string;
}

const NoteDetail = ({ match }) => {
	const history = useHistory();

	const noteId = match.params.id;
	const [note, setNote] = useState({
		title: '',
		description: '',
		technology: '',
	});
	const [isLoading, setIsLoading] = useState(false);

	const updateNote = () => {
		history.push(`/edit-note/${noteId}`);
	};

	const getNoteComponent = () => {
		if (Object.keys(note).length > 0) {
			return (
				<>
					<section className="detail-wrap">
						<p className="title">Titulo de la nota:</p>
						<p className="text">{note.title}</p>
						<p className="title">Descripción:</p>
						<p className="text">{note?.description}</p>
						<p className="title">Autor:</p>
						<p className="text">{note?.technology}</p>

						<Button onClick={updateNote}>Editar Nota</Button>
					</section>
				</>
			);
		}

		return (
			<FormWrap>
				<div className="not-found">
					<IonIcon icon={documentAttachOutline}></IonIcon>
					<p>No se encontro Nota.</p>
				</div>
			</FormWrap>
		);
	};

	useEffect(() => {
		const getPet = async () => {
			try {
				setIsLoading(true);
				const { data } = await NotesApi.get(`/projects/${noteId}`);
				setNote(data);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};

		getPet();
	}, [noteId]);

	return (
		<PageLayout>
			<Main>
				<BackButton />
				<Title>Detalle Nota</Title>
				<PetWrapper>
					{isLoading ? (
						<FormWrap>
							<div className="loader-wrap">
								<Loader />
							</div>
						</FormWrap>
					) : (
						getNoteComponent()
					)}
				</PetWrapper>
			</Main>
		</PageLayout>
	);
};

export default NoteDetail;
