export interface FormValidation  {
	formId: string;
	isValid: boolean;
	isDirty?: boolean;
}

export interface FormState {
	[formId: string]: FormValidation
}
