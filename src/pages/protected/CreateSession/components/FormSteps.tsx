import React, { useContext } from 'react';
import { SessionFormContext } from '../../../../contexts/SessionForm/SessionFormContext.tsx';
import ClientForm from './ClientForm.tsx';
import ImageSets from './ImageSets.tsx';
import SetSettings from './SetSettings.tsx';

const FormSteps = () => {
  const { state, dispatch } = useContext(SessionFormContext);

  return (
    <>
      {state.formStep === 0 ? <ClientForm /> : null}
      {state.formStep === 1 ? <ImageSets /> : null}
      {state.formStep === 2 ? <SetSettings /> : null}
    </>
  );
};

export default FormSteps;
