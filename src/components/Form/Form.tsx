import * as React from 'react';

export interface ValidatorProps {
	// formId: string;
	isValid: (valid: boolean) => void;
	// isDirty?: (dirty: boolean) => void;
}
export const withValidation = (WrappedComponent: any) => {
	// ...and returns another component...
	return class extends React.Component<ValidatorProps, {}> {
		constructor(props: ValidatorProps) {
			super(props);
		}

		render() {
			// ... and renders the wrapped component with the fresh data!
			// Notice that we pass through any additional props
			return <WrappedComponent {...this.props} />;
		}
	};
};


