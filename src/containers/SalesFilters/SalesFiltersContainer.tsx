import * as React from 'react';
import { connect } from 'react-redux';
import SalesFiltersLayout, { SalesFilterProps } from './SalesFiltersLayout';
import { SalesFilters } from './model';
import { getSalesFilters } from './selectors';
import { updateField } from './actions';

interface Props {
	countryOptions: string[];
	country: string;
}
interface DispatchFromProps {
	updateFieldAction: (field: string, value: any) => void;
}
class SalesFiltersContainer extends React.Component<Props & DispatchFromProps, {}> {

	handleChanged = (field: string, value: any) => {
		const { updateFieldAction } = this.props;
		updateFieldAction(field, value);
	};

	render() {
		const { country, countryOptions } = this.props;
		const props: SalesFilterProps = {
			country,
			countryOptions,
			onChanged: this.handleChanged
		};
		return (
			<SalesFiltersLayout {...props} />
		);
	}
}
const mapStateToProps = (state: any): Props => {
	const salesFilters: SalesFilters = getSalesFilters(state);
	const { filterValues: { country }, countryOptions } = salesFilters;
	return {
		country,
		countryOptions
	}
};
const mapDispatchToProps: DispatchFromProps = {
	updateFieldAction: updateField
};
export default connect<Props, DispatchFromProps, void>(mapStateToProps, mapDispatchToProps)(SalesFiltersContainer);
