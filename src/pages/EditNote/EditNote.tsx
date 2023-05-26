import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../components/shared/Button/Button';
import Input from '../../components/shared/FormComponents/Input/Input';
import { Form, FormLabel, FormWrap } from '../../components/shared/Form/Form';
import { Main, Title } from '../../components/shared/Main/Main';
import BackButton from '../../components/shared/BackButton/BackButton';
import NotesApi from '../../services/api';
import { toast } from 'react-hot-toast';
import { useHistory } from 'react-router';
import PageLayout from '../../components/Layout/PageLayout';
import CustomSelect from '../../components/shared/FormComponents/Select/Select';
import { useEffect, useState } from 'react';
import { Loader } from '../../components/shared/Loader/Loader';
import { INITIAL_VALUES, PetValidations } from './util';

const EditNote = ({ match }) => {
	const noteId = match.params.id;
	const history = useHistory();

	const [isLoading, setIsLoading] = useState(false);

	const {
		handleSubmit,
		control,
		setValue,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		defaultValues: INITIAL_VALUES,
		resolver: yupResolver(PetValidations),
	});

	const onSubmit = async (data) => {
		try {
			await NotesApi.put(`/projects/${noteId}`, {
				title: data?.title,
				description: data?.description,
				technology: data?.technology,
			});

			toast.success('Nota Actualizada!');
			history.push(`/note/${noteId}`);
		} catch (error) {
			toast.error('Error al actualizar');
		}
	};

	useEffect(() => {
		const getData = async () => {
			try {
				setIsLoading(true);
				const { data } = await NotesApi.get(`/projects/${noteId}`);
				setValue('title', data?.title);
				setValue('description', data?.description);
				setValue('technology', data?.technology);
			} catch (error) {
				console.log(error);
				toast.error('error al obtener valores');
				history.push('/notes');
			} finally {
				setIsLoading(false);
			}
		};

		getData();
	}, [noteId, history]);

	return (
		<PageLayout>
			<Main>
				<BackButton />
				<Title>Editar Nota</Title>
				<FormWrap>
					{!isLoading ? (
						<Form onSubmit={handleSubmit(onSubmit)}>
							<FormLabel>Titulo</FormLabel>
							<Input
								id="name"
								type="text"
								errors={errors}
								nameValue="title"
								control={control}
							/>
							<FormLabel>Descripción</FormLabel>
							<Input
								id="description"
								type="text"
								errors={errors}
								nameValue="description"
								control={control}
								multiline
							/>
							<FormLabel>Tecnologia</FormLabel>
							<CustomSelect
								errors={errors}
								nameValue="technology"
								control={control}
								setValue={setValue}
								options={[
									{
										label: 'Javascript',
										value: 'Javascript',
									},
									{
										label: 'Python',
										value: 'Python',
									},
									{
										label: 'Java',
										value: 'Java',
									},
								]}
							/>
							<Button type="submit">Actualizar Nota</Button>
						</Form>
					) : (
						<div className="loader-wrap">
							<Loader />
						</div>
					)}
				</FormWrap>
			</Main>
		</PageLayout>
	);
};

export default EditNote;
