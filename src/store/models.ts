
import { SalesFilters } from '../containers/SalesFilters/model';
import { RouterState } from 'react-router-redux';
import { Reducer } from 'redux';

export interface RootState {
	routing:  Reducer<RouterState>,
	salesFilters: SalesFilters
}
