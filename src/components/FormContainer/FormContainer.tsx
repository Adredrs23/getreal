import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import FormSelect from '../FormSelect/FormSelect';
import FormTextarea from '../FormTextarea/FormTextarea';

type GridProps = {
  gtc?: string;
};

const FormContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: red;
  width: 60%;
  height: 40%;
`;

const GridContainerDiv = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.gtc ? props.gtc : 'repeat(3,1fr)'};
  grid-wrap: wrap;
`;

const FormContainer: FC = ({ children }) => {
  const [comment, setComment] = useState('');

  return (
    <FormContainerDiv>
      <GridContainerDiv gtc='repeat(4,1fr)'>{children}</GridContainerDiv>
      <GridContainerDiv>{children}</GridContainerDiv>
      <GridContainerDiv>
        <FormSelect
          label='Execution Venue'
          name='eVenue'
          optionValues={[{ label: 'Dog', value: 'dog' }]}
        />
        <FormSelect
          label='check'
          name='check'
          optionValues={[
            { label: 'CAt', value: 'CAt' },
            { label: 'sad', value: 'CasdAt' },
            { label: 'asd', value: 'hd' },
          ]}
        />
        <FormSelect
          label='check'
          name='check'
          optionValues={[{ label: 'CAt', value: 'CAt' }]}
        />
      </GridContainerDiv>
      <GridContainerDiv>
        <FormTextarea
          name='comment'
          label='Comment'
          rows={8}
          // cols={33}
          value={comment}
          setValue={setComment}
        />
      </GridContainerDiv>
    </FormContainerDiv>
  );
};

export default FormContainer;
