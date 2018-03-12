
import { FORM_ACTIONS, FormAction } from './actions';
import { Action } from 'redux';
import { FormState } from './model';

const updateValidity = (state: FormState, action: Action): FormState => {
	const { payload: { formId, isValid  } } = (<FormAction>action);
	return {
		...state,
		[formId]: {
			...state[formId],
			isValid
		}
	}
};
const REDUCER_MAP = {
	[FORM_ACTIONS.SET_VALIDITY]: updateValidity
};

const initialState: FormState = {
	'outliers': { // todo remove this
		formId: 'outliers',
		isValid: true,
		isDirty: false
	}
};

export const formReducer = (state: FormState = initialState,
								action: Action): FormState => {
	const reducer = REDUCER_MAP[action.type];
	return reducer ? reducer(state, action): state;
};
