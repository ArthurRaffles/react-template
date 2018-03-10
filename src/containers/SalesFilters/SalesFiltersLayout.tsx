import * as React from 'react';
import { Dropdown } from 'primereact/components/dropdown/Dropdown';
import  './SalesFilters.css';

export interface SalesFilterProps {
	countryOptions: string[];
	country: string;
	onChanged: (field: string, value: any) => void;
}

const SalesFiltersLayout = (props: SalesFilterProps): JSX.Element => {

	const { countryOptions, country, onChanged } = props;
	const opts = countryOptions.map((opt: string) => ({ name: opt, value: opt, label: opt }));

	return (
		<div className='sales-filters'>
			<div className='filter-item'>
				<label>Country</label>
				<Dropdown
					value={country}
					options={opts}
					style={{width:'150px'}}
					onChange={(event) => onChanged('country', event.value)}
					placeholder="Select a Country"
				/>
			</div>
		</div>
	);
};
export default SalesFiltersLayout;
