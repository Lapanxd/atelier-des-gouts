import React, { useContext } from 'react';
import { SessionFormContext } from '../../../../context/SessionForm/SessionFormContext.tsx';

const SetSettings = () => {
  const { state, dispatch } = useContext(SessionFormContext);

  return (
    <div className='w-full'>
      <h2 className='text-xl mb-4'>Créer les duos d'images</h2>
      <div className='flex gap-2'>
        <img
          src='https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630'
          className='w-1/2 rounded-lg object-cover'></img>

        <img
          src='https://placehold.co/600x400'
          className='w-1/2 rounded-lg	object-cover'></img>
      </div>

      <button className='btn btn-wide mt-2'>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'
             className='w-6 h-6'>
          <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 12.75 6 6 9-13.5' />
        </svg>
        Valider le duo d'images
      </button>

      <button className='btn btn-block mt-5' disabled={!state.gallery}>
        Créer la session
      </button>
    </div>
  );
};

export default SetSettings;
