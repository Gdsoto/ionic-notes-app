import React from 'react';
import { CardWrapper } from './style';
import { Fab } from '@mui/material';
import { IonIcon } from '@ionic/react';
import { eyeOutline, trashOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';
import NotesApi from '../../services/api';
import { toast } from 'react-hot-toast';

const NoteCard = ({ note, setNote, noteStatus }) => {
	const history = useHistory();

	const onClick = () => {
		history.push(`/note/${note.id}`);
	};

	const deleteNote = async () => {
		try {
			await NotesApi.delete(`/projects/${note.id}/`);
			toast.success('Nota Eliminada');
			setNote(!noteStatus);
		} catch (error) {
			toast.error('No se pudo eliminar la nota');
		}
	};

	return (
		<CardWrapper>
			<div className="detail-wrap">
				<div>
					<p className="name-wrap">{note.title}</p>
				</div>
				<div className="button-wrap">
					<Fab aria-label="add" color="warning" onClick={onClick}>
						<IonIcon icon={eyeOutline}></IonIcon>
					</Fab>
					<Fab aria-label="add" color="error" onClick={deleteNote}>
						<IonIcon icon={trashOutline}></IonIcon>
					</Fab>
				</div>
			</div>
		</CardWrapper>
	);
};

export default NoteCard;
