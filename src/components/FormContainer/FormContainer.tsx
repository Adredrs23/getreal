import React, { FC } from 'react';
import styled from '@emotion/styled';

const FormContainerDiv = styled.div`
  // display:flex;
  // background-color: red;
  width: 60%;
  height: 60vh;
`;

const FormContainer: FC = ({ children }) => {
  return <FormContainerDiv>{children}</FormContainerDiv>;
};

export default FormContainer;
