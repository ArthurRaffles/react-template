import * as React from 'react';
import { FormValidation } from './model';
import { RootState } from '../../store/models';
import { connect } from 'react-redux';
import { getFormState } from './selectors';

export interface ValidatorProps {
	isValid: (valid: boolean) => void;
}
export const withValidation = (WrappedComponent: any) => {
	return class extends React.Component<ValidatorProps, {}> {
		constructor(props: ValidatorProps) {
			super(props);
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	};
};

export interface OwnProps {
	formId: string;
	children: (validity: FormValidation) => any;
}
interface StateProps {
	formValidation: FormValidation;
}
class Form extends React.Component<OwnProps & StateProps, {}> {

	render() {
		return this.props.children(this.props.formValidation);
	}
}
const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => ({
		formValidation: getFormState(state, ownProps.formId)
	});

export default connect<StateProps, {}, OwnProps>(mapStateToProps,
	{})(Form);
