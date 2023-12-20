import React, { useContext, useEffect } from 'react';
import { SessionFormContext } from '../../../../context/SessionForm/SessionFormContext.tsx';

const ClientList = () => {
  const { state, dispatch } = useContext(SessionFormContext);

  return (
    <div className="flex flex-col">
      {state.clients?.map((client, index) => (
        <div key={index}>
          {client.firstname !== undefined || client.lastname !== undefined ? (
            <div className="flex gap-1 items-center mb-1 w-full " key={index}>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-8">
                  <span className="text-xs">{`${client.firstname[0]}${client.lastname[0]}`}</span>
                </div>
              </div>
              <p>{`${client.firstname} ${client.lastname}`}</p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default ClientList;
