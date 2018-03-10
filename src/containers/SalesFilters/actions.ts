import { Action } from 'redux';

const prefix = 'SALES_FILTERS';
export const SALES_FILTERS_ACTIONS = {
	UPDATE: `${prefix}/UPDATE_FILTER`
};

export interface FieldUpdateAction extends Action {
	payload: {
		field: string;
		value: any;
	};
}

export const updateField = (field: string, value: any): FieldUpdateAction => ({
		type: SALES_FILTERS_ACTIONS.UPDATE,
		payload: {
			field,
			value
		}
	}
);
