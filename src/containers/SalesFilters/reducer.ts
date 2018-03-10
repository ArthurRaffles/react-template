import { Action } from 'redux';
import { FieldUpdateAction, SALES_FILTERS_ACTIONS } from './actions';
import { SalesFilters } from './model';

const updateField = (state: SalesFilters, action: Action): SalesFilters => {
	const { payload: { field, value  } } = (<FieldUpdateAction>action);
	return {
		...state,
		filterValues: {
			...state.filterValues,
			[field]: value
		}
	}
};

const REDUCER_MAP = {
	[SALES_FILTERS_ACTIONS.UPDATE]: updateField
};

const initialState: SalesFilters = {
	filterValues: {
		country: ''
	},
	countryOptions: ['UK', 'US']
};

export const salesFiltersReducer = (state: SalesFilters = initialState, action: Action): SalesFilters => {
	const reducer = REDUCER_MAP[action.type];
	return reducer ? reducer(state, action): state;
};
