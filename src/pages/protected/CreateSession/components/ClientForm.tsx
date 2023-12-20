import React, { useContext, useEffect, useState } from 'react';
import { SessionFormContext } from '../../../../context/SessionForm/SessionFormContext.tsx';
import { SessionFormActions } from '../../../../core/enums/session-form-actions.ts';
import { Nullable } from '../../../../core/types/nullable.ts';

const ClientForm = () => {
  const [firstname, setFirstname] = useState<Nullable<string>>(null);
  const [lastname, setLastname] = useState<Nullable<string>>(null);

  const { state, dispatch } = useContext(SessionFormContext);

  function updateFirstname(newFirstname: string) {
    setFirstname(newFirstname);
  }

  function updateLastname(newLastname: string) {
    setLastname(newLastname);
  }

  function addClient() {
    if (firstname !== null && lastname !== null && state.clients.length < 3) {
      dispatch({
        type: SessionFormActions.setClient,
        payload: { firstname, lastname },
      });
    }
  }

  function onClickNext() {
    if (state.clients.length < 0) {
      return;
    }

    dispatch({ type: SessionFormActions.setNextStep });
  }

  return (
    <>
      <h2 className='text-xl mb-4'>Ajouter les clients</h2>
      <div className='flex gap-2 '>
        <div className='flex flex-col'>
          <label className='pl-2'>Prénom</label>
          <input
            type='text'
            placeholder='Ex: John'
            className='input input-bordered w-full max-w-xs'
            onChange={(e) => updateFirstname(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label className='pl-2'>Nom</label>
          <input
            type='text'
            placeholder='Ex: Doe'
            className='input input-bordered w-full max-w-xs'
            onChange={(e) => updateLastname(e.target.value)}
          />
        </div>
      </div>
      <button className='btn btn-wide mt-2' onClick={addClient}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          data-slot='icon'
          className='w-6 h-6'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
        </svg>
        Ajouter un client
      </button>
      <button className='btn btn-block mt-5' disabled={!state.clients.length} onClick={onClickNext}>
        Suivant
      </button>
    </>
  );
};

export default ClientForm;
