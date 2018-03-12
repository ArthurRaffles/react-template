import { RootState } from '../../store/models';
import { FormValidation } from './model';

export const getFormState = (state: RootState, formId: string): FormValidation =>
	state.formState[formId] || {
		formId,
		isValid: true,
		isDirty: false
	};
