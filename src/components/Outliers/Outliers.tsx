import * as React from 'react';

import SalesFiltersContainer from '../../containers/SalesFilters/SalesFiltersContainer';
import { Accordion, AccordionTab } from 'primereact/components/accordion/Accordion';
import './Outliers.css';
import TradesFiltersContainer from '../../containers/TradesFilters/TradesFiltersContainer';
import { Button } from 'primereact/components/button/Button';
import Form, { ValidatorProps, withValidation } from '../Form/Form';
import { updateValidity } from '../Form/actions';
import { FormValidation } from '../Form/model';

const val: ValidatorProps = {
	isValid: (valid: boolean) =>
		updateValidity('outliers', true)
};

const TradesFilters = withValidation(TradesFiltersContainer);
const SalesFilters = withValidation(SalesFiltersContainer);

export class Outliers extends React.Component<{}, {}> {
	handleSubmit = (event: any) => {
		event.preventDefault();
		console.warn('submmit', event);
	};

	render() {
		return (
			<Form formId={'outliers'}>
				{(formValidation: FormValidation) =>
					<form className='filters'>
						<label className='title'>Filters</label>
						<Accordion>
							<AccordionTab header="Trades">
								<TradesFilters {...val} />
							</AccordionTab>
							<AccordionTab header="Sales">
								<SalesFilters  {...val}/>
							</AccordionTab>
						</Accordion>
						<Button
							label="Submit"
							onClick={this.handleSubmit}
							disabled={formValidation.isValid}
						/>
					</form>}
			</Form>

		);
	}
}

