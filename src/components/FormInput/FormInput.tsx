import React, { FC } from 'react';
import styled from '@emotion/styled';

import { FormInputPropsType } from '../../interfaces/FormInputInterface';

// import './FormInputStyles.css';

const FormInputContainer = styled.div`
  width: 18rem;
  height: 4.5rem;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // border: 1px solid black;
  border-radius: 5px;
  // background-color: red;

  & > label {
    text-align: left;
    height: 1.5rem;
    font-size: 14px;
    // color:cyan;
    // background-color: cyan;
  }

  & > input {
    height: 2.2rem;
    // padding: 0 5px;
    font-size: 18px;
    border: none;
    border-radius: inherit;
    outline: none;

    // background-color: rgba(0, 0, 0, 0.1);
    :hover,
    :focus {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

const FormInput: FC<FormInputPropsType> = ({
  label,
  name,
  stateValue,
  stateSetter,
  ...rest
}) => {
  return (
    <FormInputContainer>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        value={stateValue}
        type='number'
        onChange={(e): void => stateSetter(e.target.value)}
        {...rest}
      />
    </FormInputContainer>
  );
};

export default FormInput;
