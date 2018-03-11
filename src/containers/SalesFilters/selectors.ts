
import { SalesFilters } from './model';
import { RootState } from '../../store/models';

export const getSalesFilters = (state: RootState): SalesFilters => state.salesFilters;
