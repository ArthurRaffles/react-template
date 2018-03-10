import * as React from 'react';
import SalesFiltersContainer from '../../containers/SalesFilters/SalesFiltersContainer';
import { Accordion, AccordionTab } from 'primereact/components/accordion/Accordion';
import './Filters.css';

export const Filters = () => (
	<div className='filters'>
		<label className='title'>Filters</label>
		<Accordion>
			<AccordionTab header="Trades">
			</AccordionTab>
			<AccordionTab header="Sales">
				<SalesFiltersContainer/>
			</AccordionTab>
		</Accordion>
	</div>

);
