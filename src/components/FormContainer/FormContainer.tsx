import React, { FC } from 'react';
import styled from '@emotion/styled';

type GridProps = {
  gtc?: string;
};

const FormContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: red;
  width: 80%;
  height: 80vh;
`;

const GridContainerDiv = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.gtc ? props.gtc : 'repeat(3,1fr)'};
  grid-wrap: wrap;
`;

const FormContainer: FC = ({ children }) => {
  return (
    <FormContainerDiv>
      <GridContainerDiv gtc='repeat(4,1fr)'>{children}</GridContainerDiv>
      <GridContainerDiv>{children}</GridContainerDiv>
    </FormContainerDiv>
  );
};

export default FormContainer;
