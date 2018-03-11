import * as React from 'react';
import { connect } from 'react-redux';
import TradesFiltersLayout, { TradesFilterProps } from './TradesFiltersLayout';
import { TradesFilters } from './model';
import { getTradesFilters } from './selectors';
import { updateField } from './actions';
import { ValidatorProps } from '../../components/Form/Form';
import { bindActionCreators } from 'redux'
interface Props {
	startDate?: Date;
	endDate?: Date;
}

interface DispatchFromProps extends ValidatorProps {
	updateFieldAction: (field: string, value: any) => void;
}

class TradesFiltersContainer extends React.Component<Props & DispatchFromProps, {}> {

	handleChanged = (field: string, value: any) => {
		const { updateFieldAction, isValid } = this.props;
		updateFieldAction(field, value);
		isValid(true);
	};

	render() {
		const { startDate, endDate } = this.props;
		const props: TradesFilterProps = {
			startDate, endDate,
			onChanged: this.handleChanged
		};
		return (
			<TradesFiltersLayout {...props} />
		);
	}
}

const mapStateToProps = (state: any): Props => {
	const tradesFilters: TradesFilters = getTradesFilters(state);
	const { filterValues: { startDate, endDate } } = tradesFilters;
	return {
		startDate,
		endDate
	};
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
export default connect<Props, DispatchFromProps, ValidatorProps>(mapStateToProps, mapDispatchToProps)(TradesFiltersContainer);
