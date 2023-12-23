import React, { useContext } from 'react';
import { SessionFormContext } from '../../../../contexts/SessionForm/SessionFormContext.tsx';

const DuoImages = () => {
  const { state } = useContext(SessionFormContext);

  return (
    <>
      {state?.duoImages?.map((duo, index) => (
        <div className='flex mt-2' key={index}>
          <img src={duo.urls[0]} className='w-32 h-20 rounded-l-lg object-cover' />
          <img src={duo.urls[1]} className='w-32 h-20 rounded-r-lg object-cover' />
        </div>
      ))}
    </>
  );
};

export default DuoImages;
