



export interface JsonFormValidators {
    required?: boolean;
    requiredTrue?: boolean;
    email?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    nullValidator?: boolean;
}

export interface JsonFormControls {
    name: string;
    label: string;
    value: string;
    type: string;
    required: boolean;
    validators: JsonFormValidators;
}
export interface JsonFormData {
    controls: JsonFormControls[];
}