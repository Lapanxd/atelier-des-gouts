import React, { useContext } from 'react';
import { SessionFormContext } from '../../../../contexts/SessionForm/SessionFormContext.tsx';
import ClientList from './ClientList.tsx';
import DuoImages from './DuoImages.tsx';
import { SessionFormActions } from '../../../../core/enums/session-form-actions.ts';
import ImageSetCard from '../../../../shared/components/ImageSetCard.tsx';

const Accordion = () => {
  const { state, dispatch } = useContext(SessionFormContext);

  function setStep(step: number) {
    dispatch({
      type: SessionFormActions.setStep,
      payload: step,
    });
  }

  return (
    <>
      <div className='collapse bg-base-200 mb-2'>
        <input
          type='radio'
          name='my-accordion'
          checked={state.formStep === 0}
          onChange={() => setStep(0)}
        />
        <div className='collapse-title text-xl font-medium'>Clients</div>
        <div className='collapse-content'>
          <ClientList />
        </div>
      </div>
      <div className='collapse bg-base-200 mb-2'>
        <input
          type='radio'
          name='my-accordion'
          checked={state.formStep === 1}
          onChange={() => setStep(1)}
        />
        <div className='collapse-title text-xl font-medium'>Set d'image</div>
        <div className='collapse-content'>
          {state.gallery ? (
            <div
              className='w-full h-20 flex flex-none gap-3 pl-2 bg-base-200 rounded-3xl hover:bg-base-300'>
              <img
                src={state.gallery.primaryPhoto.url}
                className='h-16 w-16 object-cover rounded-2xl contrast-50 self-center'
              />
              <p className='self-center'>{state.gallery.title}</p>
            </div>
          ) : null}
        </div>
      </div>
      <div className='collapse bg-base-200 mb-2'>
        <input
          type='radio'
          name='my-accordion'
          checked={state.formStep === 2}
          onChange={() => setStep(2)}
        />
        <div className='collapse-title text-xl font-medium'>Paramétrage de la session</div>
        <div className='collapse-content'>
          <DuoImages />
        </div>
      </div>
    </>
  );
};

export default Accordion;
