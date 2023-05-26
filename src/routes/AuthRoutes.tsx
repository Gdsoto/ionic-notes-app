import { Redirect, Route } from 'react-router';

// Pages
import NoteDetail from '../pages/NoteDetail/NoteDetail';
import NoteCardList from '../pages/NoteCardList/NoteCardList';
import EditNote from '../pages/EditNote/EditNote';
import CreateNote from '../pages/CreateNote/CreateNote';

const AuthRoutes = () => {
	return (
		<>
			<Redirect exact path="/" to="/notes" />
			<Route path="/notes" component={NoteCardList} exact={true} />
			<Route path="/new-note" component={CreateNote} exact={true} />
			<Route path="/note/:id" component={NoteDetail} exact={true} />
			<Route path="/edit-note/:id" component={EditNote} exact={true} />
		</>
	);
};

export default AuthRoutes;
