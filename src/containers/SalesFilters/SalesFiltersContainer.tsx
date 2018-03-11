import * as React from 'react';
import { connect } from 'react-redux';
import SalesFiltersLayout, { SalesFilterProps } from './SalesFiltersLayout';
import { SalesFilters } from './model';
import { getSalesFilters } from './selectors';
import { updateField } from './actions';
import { RootState } from '../../store/models';
import { bindActionCreators } from 'redux';
import { ValidatorProps } from '../../components/Form/Form';

interface Props {
	countryOptions: string[];
	country: string;
}
interface DispatchFromProps extends ValidatorProps {
	updateFieldAction: (field: string, value: any) => void;
}
class SalesFiltersContainer extends React.Component<Props & DispatchFromProps, {}> {

	handleChanged = (field: string, value: any) => {
		const { updateFieldAction, isValid } = this.props;
		updateFieldAction(field, value);
		isValid(true);
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
const mapStateToProps = (state: RootState): Props => {
	const salesFilters: SalesFilters = getSalesFilters(state);
	const { filterValues: { country }, countryOptions } = salesFilters;
	return {
		country,
		countryOptions
	}
};
const mapDispatchToProps = (dispatch: any, props: ValidatorProps) => bindActionCreators({
	updateFieldAction: updateField,
	isValid: (isValid) => {
		console.warn('calling..', isValid);
		return props.isValid(isValid)
	}
}, dispatch);
// const mapDispatchToProps: DispatchFromProps = {
// 	updateFieldAction: updateField
// };
export default connect<Props, DispatchFromProps, ValidatorProps>(mapStateToProps, mapDispatchToProps)(SalesFiltersContainer);
