type ValidationFn = (v: any) => null | Record<string, string>;

export const notEmpty: ValidationFn = (v: string) => (
  v.length ? null : { notEmpty: 'Field should not be empty' }
);
export const minLength = (min: number): ValidationFn => (value: string) => {
  return value.length >= min ? null : { minLength: `Field should contain at least ${min} characters` };
};

export const validate = <T extends Record<string, any>>(
  form: T,
  rules: Record<keyof T, ValidationFn[]>,
): { isValid: boolean, messages: Record<keyof T, string> } => {
  const fieldsToValidate = Object.keys(rules);
  const errorsByFields: Record<string, any> = {};

  fieldsToValidate.forEach((field) => {
    const validators = rules[field];
    const value = form[field];

    validators.forEach((validator) => {
      const validationResult = validator(value);
      if (validationResult) {
        errorsByFields[field] = {
          ...(errorsByFields[field] || {}),
          ...validationResult,
        };
      }
    });
  });

  const isValid = !Object.keys(errorsByFields).length;

  // For now it supports only one message per field
  const messages = Object
    .entries(errorsByFields)
    .reduce((allErrors, [field, errors]) => {
      const [oneError] = Object.values(errors);
      return {
        ...allErrors,
        [field]: oneError,
      };
    }, {} as Record<keyof T, any>);

  return { isValid, messages };
};
