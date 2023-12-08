import React, { useEffect, useState } from 'react';

interface ClientFormProps {
  index: number;
  firstname: string;
  lastname: string;
  updateClient: (index: number, { firstname, lastname }) => void;
}

const ClientForm: React.FC<ClientFormProps> = (props) => {
  const { updateClient, index } = props;
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');

  function updateFirstname(newFirstname: string) {
    setFirstname(newFirstname);
    updateClient(index, { firstname, lastname });
  }

  function updateLastname(newLastname: string) {
    setLastname(newLastname);
    updateClient(index, { firstname, lastname });
  }

  return (
    <div className='mt-3 flex gap-2'>
      <div>
        <label className='pl-2'>Prénom</label>
        <input
          type='text'
          placeholder='Ex: John'
          className='input input-bordered w-full max-w-xs'
          defaultValue={firstname}
          onChange={e => updateFirstname(e.target.value)}
        />
      </div>
      <div>
        <label className='pl-2'>Nom</label>
        <input
          type='text'
          placeholder='Ex: Doe'
          className='input input-bordered w-full max-w-xs'
          defaultValue={lastname}
          onChange={e => updateLastname(e.target.value)}

        />
      </div>
    </div>
  );
};

export default ClientForm;
