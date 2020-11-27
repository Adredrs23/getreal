import React, { FC, useState } from 'react';
import './App.css';
import FormContainer from './components/FormContainer/FormContainer';
import FormInput from './components/FormInput/FormInput';
// import { ArrayType } from './interfaces/ArrayTypeInterface';
import { FormInputPropsType } from './interfaces/FormInputInterface';

const App: FC = () => {
  const [clientName, setClientName] = useState<string>('Jack Chem');
  const [organizationId, setOrganizationId] = useState<string>('AO1231');
  const [tradingMarket, setTradingMarket] = useState<string>('HK');
  const [crossEngineEnabled, setCrossEngineEnabled] = useState('Y');
  const [status, setStatus] = useState('Active');

  const arrayData: Array<FormInputPropsType> = [
    {
      label: 'Client Name',
      name: 'clientName',
      // readOnly: true,
      type: 'text',
      stateValue: clientName,
      stateSetter: (item) => setClientName(item),
    },
    {
      label: 'Organization Id',
      name: 'organizationId',
      readOnly: true,
      type: 'text',
      stateValue: organizationId,
      stateSetter: (item) => setOrganizationId(item),
    },
    {
      label: 'Trading Market',
      name: 'tradingMarket',
      readOnly: true,
      type: 'text',
      stateValue: tradingMarket,
      stateSetter: (item) => setTradingMarket(item),
    },
    {
      label: 'Cross Engine Enabled',
      name: 'crossEngineEnabled',
      readOnly: true,
      type: 'text',
      stateValue: crossEngineEnabled,
      stateSetter: (item) => setCrossEngineEnabled(item),
    },
    {
      label: 'Status',
      name: 'status',
      readOnly: true,
      type: 'text',
      stateValue: status,
      stateSetter: (item) => setStatus(item),
    },
  ];

  let data = arrayData.map((data) => <FormInput {...data} />);
  return (
    <div className='App'>
      <FormContainer>{data}</FormContainer>
      {/* <FormInput
        label={'Client Name'}
        name={'clientName'}
        stateValue={clientName}
        stateValueModifier={setClientName}
      /> */}
    </div>
  );
};

export default App;
