import styled from '@emotion/styled';
import React, { FC, InputHTMLAttributes } from 'react';
import { FormInputContainer } from '../FormInput/FormInput';

interface FormTextareaPropsType
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  rows: number;
  cols?: number;
  placeholder?: string;
  value: string;
  setValue: (item: string) => void;
}

const FormTextareaContainer = styled.div`
  width: 18rem;
  height: auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  //   background-color: cyan;

  & > label {
    text-align: left;
    height: 1.5rem;
    font-size: 14px;
    // color:cyan;
    // background-color: cyan;
  }

  & > textarea {
    resize: none;

    :hover,
    :focus {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

const FormTextarea: FC<FormTextareaPropsType> = ({
  label,
  name,
  rows,
  cols,
  placeholder,
  value,
  setValue,
  ...rest
}) => {
  return (
    <FormTextareaContainer>
      <label htmlFor={name}>{label}</label>

      <textarea
        id={name}
        rows={rows}
        cols={cols}
        placeholder={placeholder || 'Comments here.'}
        onChange={(e) => setValue(e.target.value)}
        {...rest}
      >
        {value}
      </textarea>
    </FormTextareaContainer>
  );
};

export default FormTextarea;
