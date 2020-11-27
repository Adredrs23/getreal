import React, { FC } from 'react';
import styled from '@emotion/styled';

import { FormInputPropsType } from '../../interfaces/FormInputInterface';

// import './FormInputStyles.css';

type InputProp = {
  readOnly?: boolean;
};

export const FormInputContainer = styled.div<InputProp>`
  width: 18rem;
  height: 4.5rem;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: ${(props) => (props.readOnly ? 'none' : '1px solid black')};
  border-radius: 5px;
  // background-color: red;

  & > label {
    text-align: left;
    height: 1.5rem;
    font-size: 14px;
    // color:cyan;
    // background-color: cyan;
  }

  & > input,
  & > select {
    height: 2.2rem;
    // padding: 0 5px;
    font-size: 18px;
    border: none;
    border-radius: inherit;
    outline: none;
    cursor: ${(props) => (props.readOnly ? 'default' : 'text')};

    background-color: ${(props) =>
      props.readOnly ? 'none' : 'rgba(0, 0, 0, 0.1)'};
    // background-color: rgba(0, 0, 0, 0.1);
    :hover,
    :focus {
      background-color: ${(props) =>
        props.readOnly ? 'none' : 'rgba(0, 0, 0, 0.2)'};
      // background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

const FormInput: FC<FormInputPropsType> = ({
  label,
  name,
  stateValue,
  stateSetter,
  readOnly,
  ...rest
}) => {
  return (
    <FormInputContainer readOnly={readOnly}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        value={stateValue}
        readOnly={readOnly}
        onChange={(e): void => stateSetter(e.target.value)}
        {...rest}
      />
    </FormInputContainer>
  );
};

export default FormInput;
