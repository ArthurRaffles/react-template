import * as React from 'react';

import SalesFiltersContainer from '../../containers/SalesFilters/SalesFiltersContainer';
import { Accordion, AccordionTab } from 'primereact/components/accordion/Accordion';
import './Filters.css';
import TradesFiltersContainer from '../../containers/TradesFilters/TradesFiltersContainer';
import { Button } from 'primereact/components/button/Button';
import { ValidatorProps, withValidation } from '../Form/Form';
// import { Button } from 'primereact/components/button/Button';
// import { connect } from 'react-redux';

//
// const submit = (stuff: Nested<any>) => {
// 	console.warn('stuff', stuff);
// };
// export const Filters = () => (
// 	<form className='filters' onSubmit={this.handleSubmit}>
// 		<label className='title'>Filters</label>
// 		<Accordion>
// 			<AccordionTab header="Trades">
// 				<TradesFiltersContainer/>
// 			</AccordionTab>
// 			<AccordionTab header="Sales">
// 				<SalesFiltersContainer/>
// 			</AccordionTab>
// 		</Accordion>
// 		<input type="submit" value="Submit" />
// 	</form>
// );
const val: ValidatorProps = {
	// formId: 'trades',
	isValid: (valid: boolean) => {
		console.warn('trades', valid);
		return {
			type: 'FOO'
		}
	}
};
const val1: ValidatorProps = {
	// formId: 'trades',
	isValid: (valid: boolean) => {
		console.warn('sales', valid);
		return {
			type: 'FOO'
		}
	}
};
const TradesFilters = withValidation(TradesFiltersContainer);
const SalesFilters = withValidation(SalesFiltersContainer);
export class Filters extends React.Component<{}, {}> {
	handleSubmit = (event: any) => {
		event.preventDefault();
		console.warn('submmit', event);
	};
	render() {
		return (
			<form className='filters' >
				<label className='title'>Filters</label>
				<Accordion>
					<AccordionTab header="Trades">
						{/*<TradesFiltersContainer/>*/}
						<TradesFilters {...val} />
					</AccordionTab>
					<AccordionTab header="Sales">
						<SalesFilters  {...val1}/>
						{/*<SalesFiltersContainer/>*/}
					</AccordionTab>

				</Accordion>
				<Button label="Submit" onClick={this.handleSubmit} />
				{/*<input type="submit" value="Submit" />*/}
			</form>
		)
	}
}
// export default connect(mapStateToProps, mapDispatchToProps)(Filters);

