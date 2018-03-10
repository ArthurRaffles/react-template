import * as React from 'react';
import { connect } from 'react-redux';
import TradesFiltersLayout, { TradesFilterProps } from './TradesFiltersLayout';
import { TradesFilters } from './model';
import { getTradesFilters } from './selectors';
import { updateField } from './actions';

interface Props {
	startDate?: Date;
	endDate?: Date;
}

interface DispatchFromProps {
	updateFieldAction: (field: string, value: any) => void;
}

class TradesFiltersContainer extends React.Component<Props & DispatchFromProps, {}> {

	handleChanged = (field: string, value: any) => {
		const { updateFieldAction } = this.props;
		updateFieldAction(field, value);
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
const mapDispatchToProps: DispatchFromProps = {
	updateFieldAction: updateField
};
export default connect<Props, DispatchFromProps, void>(mapStateToProps, mapDispatchToProps)(TradesFiltersContainer);
