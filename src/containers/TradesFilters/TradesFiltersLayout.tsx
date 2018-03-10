import * as React from 'react';
import './TradesFilters.css';
import { Calendar } from 'primereact/components/calendar/Calendar';

export interface TradesFilterProps {
	startDate?: Date;
	endDate?: Date;
	onChanged: (field: string, value: any) => void;
}

const TradesFiltersLayout = (props: TradesFilterProps): JSX.Element => {

	const { startDate, endDate, onChanged } = props;

	return (
		<div className='trades-filters'>
			<div className='filter-item'>
				<label>Start Date</label>
				<Calendar value={startDate}
						  showIcon={true}
						  onChange={(event) => onChanged('startDate', event.value)}
				>
				</Calendar>
			</div>
			<div className='filter-item'>
				<label>End Date</label>
				<Calendar value={endDate}
						  showIcon={true}
						  onChange={(event) => onChanged('endDate', event.value)}
				>
				</Calendar>
			</div>
		</div>
	);
};
export default TradesFiltersLayout;
