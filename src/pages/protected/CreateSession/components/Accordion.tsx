import React, { useContext } from 'react';
import { SessionFormContext } from '../../../../context/SessionForm/SessionFormContext.tsx';
import ClientList from './ClientList.tsx';
import DuoImages from './DuoImages.tsx';

const Accordion = () => {
  const { state, dispatch } = useContext(SessionFormContext);

  return (
    <>
      <div className='collapse bg-base-200 mb-2'>
        <input
          type='radio'
          name='my-accordion'
          checked={state.formStep === 0}
          onChange={() => console.log('test')}
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
          onChange={() => console.log('test')}
        />
        <div className='collapse-title text-xl font-medium'>Set d'image</div>
        <div className='collapse-content'>
          <p>hello</p>
        </div>
      </div>
      <div className='collapse bg-base-200 mb-2'>
        <input
          type='radio'
          name='my-accordion'
          checked={state.formStep === 2}
          onChange={() => console.log('test')}
        />
        <div className='collapse-title text-xl font-medium'>Set d'image</div>
        <div className='collapse-content'>
          <DuoImages />
        </div>
      </div>
    </>
  );
};

export default Accordion;
