import { Main, Title } from '../../components/shared/Main/Main';
import BackButton from '../../components/shared/BackButton/BackButton';
import { useEffect, useState } from 'react';
import { ListWrapper } from './style';
import NoteCard from '../../components/NoteCard/NoteCard';
import { FormWrap } from '../../components/shared/Form/Form';
import { Loader } from '../../components/shared/Loader/Loader';
import { IonIcon } from '@ionic/react';
import {
	addOutline,
	archiveOutline,
	documentTextOutline,
} from 'ionicons/icons';
import NotesApi from '../../services/api';
import { useHistory } from 'react-router';

const NoteCardList = () => {
	const history = useHistory();
	const [notes, setNotes] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [deleteNote, setDeleteNote] = useState(false);

	const handleClick = () => {
		history.push('/new-note');
	};

	const GetNoteComponent = () => {
		if (notes.length > 0) {
			return (
				<>
					{notes.map((note) => (
						<NoteCard
							key={note.id}
							note={note}
							setNote={setDeleteNote}
							noteStatus={deleteNote}
						/>
					))}
				</>
			);
		}

		return (
			<FormWrap>
				<div className="not-found">
					<IonIcon icon={documentTextOutline}></IonIcon>
					<p>No se encontraron Notas.</p>
				</div>
			</FormWrap>
		);
	};

	useEffect(() => {
		const getNotes = async () => {
			try {
				setIsLoading(true);
				const { data } = await NotesApi.get('/projects/');
				setNotes(data);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};

		getNotes();
	}, [deleteNote]);

	return (
		<Main>
			<BackButton />
			<Title>
				<IonIcon icon={archiveOutline}></IonIcon> Notas
			</Title>

			<button className="add-to-cart" onClick={handleClick}>
				<IonIcon icon={addOutline}></IonIcon> Nueva nota
			</button>

			<ListWrapper>
				{isLoading ? (
					<FormWrap>
						<div className="loader-wrap">
							<Loader />
						</div>
					</FormWrap>
				) : (
					GetNoteComponent()
				)}
			</ListWrapper>
		</Main>
	);
};

export default NoteCardList;
