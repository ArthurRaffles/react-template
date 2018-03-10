import { Action } from 'redux';
import { FieldUpdateAction, TRADES_FILTERS_ACTIONS } from './actions';
import { TradesFilters } from './model';

const updateField = (state: TradesFilters, action: Action): TradesFilters => {
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
	[TRADES_FILTERS_ACTIONS.UPDATE]: updateField
};

const initialState: TradesFilters = {
	filterValues: {}
};

export const tradesFiltersReducer = (state: TradesFilters = initialState, action: Action): TradesFilters => {
	const reducer = REDUCER_MAP[action.type];
	return reducer ? reducer(state, action): state;
};
