import React, { FC, InputHTMLAttributes } from 'react';
import { FormInputContainer } from '../FormInput/FormInput';

interface FormSelectPropsType extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  optionValues: [{ label: string; value: string }];
}

const FormSelect: FC<FormSelectPropsType> = ({
  name,
  label,
  optionValues,
  ...rest
}) => {
  let optionsArray = optionValues.map(({ label, value }) => (
    <option value={value}>{label}</option>
  ));

  return (
    <FormInputContainer>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest}>
        {optionsArray}
      </select>
    </FormInputContainer>
  );
};

export default FormSelect;
