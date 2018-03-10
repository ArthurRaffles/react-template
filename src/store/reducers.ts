import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { salesFiltersReducer } from '../containers/SalesFilters/reducer';
import { RootState } from './models';
import { tradesFiltersReducer } from '../containers/TradesFilters/reducer';

export default combineReducers<RootState>({
		routing: routerReducer,
		salesFilters: salesFiltersReducer,
		tradesFilters: tradesFiltersReducer
	}
);
