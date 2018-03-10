
import { SalesFilters } from '../containers/SalesFilters/model';
import { RouterState } from 'react-router-redux';
import { Reducer } from 'redux';
import { TradesFilters } from '../containers/TradesFilters/model';

export interface RootState {
	routing:  Reducer<RouterState>,
	salesFilters: SalesFilters,
	tradesFilters: TradesFilters
}
