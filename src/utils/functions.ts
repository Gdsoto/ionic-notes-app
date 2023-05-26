interface Object {
	id?: number;
	name?: string;
}

export const changeIdToLabel = (objects: Object[]) =>
	objects.map(({ id, name }) => ({
		value: id,
		label: name,
	}));
