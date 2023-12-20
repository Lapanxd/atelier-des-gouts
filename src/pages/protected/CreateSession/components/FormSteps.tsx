import React, { useContext } from 'react';
import { SessionFormContext } from '../../../../context/SessionForm/SessionFormContext.tsx';
import ClientForm from './ClientForm.tsx';
import ImageSets from './ImageSets.tsx';

const FormSteps = () => {
  const { state, dispatch } = useContext(SessionFormContext);

  return (
    <>
      {state.formStep === 0 ? <ClientForm /> : null}
      {state.formStep === 1 ? <ImageSets /> : null}
    </>
  );
};

export default FormSteps;
