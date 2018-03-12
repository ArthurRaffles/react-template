import { Action } from 'redux';

const prefix = 'FORM';
export const FORM_ACTIONS = {
	SET_VALIDITY: `${prefix}/SET_VALIDITY`
};
export interface FormAction extends Action {
	payload: {
		formId: string;
		isValid: boolean;
		isDirty?: boolean;
	};
}
export const updateValidity = (formId: string, isValid: boolean): FormAction => ({
	type: FORM_ACTIONS.SET_VALIDITY,
	payload: {
		formId,
		isValid
	}
});
