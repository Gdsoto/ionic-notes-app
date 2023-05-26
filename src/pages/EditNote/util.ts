import * as Yup from 'yup';
import { REGEX_TEXT, VALIDATIONS } from '../../utils/constants';

export const INITIAL_VALUES = {
	title: '',
	description: '',
	technology: '',
};

export const PetValidations = Yup.object().shape({
	title: Yup.string()
		.matches(REGEX_TEXT, VALIDATIONS.INVALID_FIELD)
		.min(2, VALIDATIONS.INVALID_FIELD)
		.max(40, VALIDATIONS.MAX_40_CHARACTER)
		.required(VALIDATIONS.FIELD_REQUIRED),
	description: Yup.string()
		.matches(REGEX_TEXT, VALIDATIONS.INVALID_FIELD)
		.min(18, VALIDATIONS.INVALID_FIELD)
		.max(160, VALIDATIONS.MAX_160_CHARACTER)
		.required(VALIDATIONS.FIELD_REQUIRED),
	technology: Yup.string()
		.min(2, VALIDATIONS.INVALID_FIELD)
		.max(40, VALIDATIONS.MAX_40_CHARACTER)
		.required(VALIDATIONS.FIELD_REQUIRED),
});
