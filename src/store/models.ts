
import { SalesFilters } from '../containers/SalesFilters/model';
import { RouterState } from 'react-router-redux';
import { Reducer } from 'redux';
import { TradesFilters } from '../containers/TradesFilters/model';
import { FormState } from '../components/Form/model';

export interface RootState {
	routing:  Reducer<RouterState>,
	formState: FormState,
	salesFilters: SalesFilters,
	tradesFilters: TradesFilters
}
