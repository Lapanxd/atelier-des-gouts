import React, { useContext } from 'react';
import { SessionFormContext } from '../../../../context/SessionForm/SessionFormContext.tsx';

const DuoImages = () => {
  const { state, dispatch } = useContext(SessionFormContext);

  return (
    <>
      {state.duoImages.map((duo, index) =>

        <div className='flex mt-2' key={index}>
          <img src={duo[0]} className='w-32 h-20 rounded-l-lg object-cover'></img>
          <img src={duo[1]} className='w-32 h-20 rounded-r-lg object-cover'></img>
        </div>)}
    </>
  );
};

export default DuoImages;