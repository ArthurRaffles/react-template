import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { salesFiltersReducer } from '../containers/SalesFilters/reducer';
import { RootState } from './models';
import { tradesFiltersReducer } from '../containers/TradesFilters/reducer';
import { formReducer } from '../components/Form/reducer';

export default combineReducers<RootState>({
		routing: routerReducer,
		formState: formReducer,
		salesFilters: salesFiltersReducer,
		tradesFilters: tradesFiltersReducer
	}
);
