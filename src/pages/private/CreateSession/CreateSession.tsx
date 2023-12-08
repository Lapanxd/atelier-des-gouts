import { Header } from '../../../shared/components/Header.tsx';
import { BackButton } from '../../../shared/components/BackButton.tsx';
import { flickrService } from '../../../core/services/flickr.service.ts';
import React, { useEffect, useState } from 'react';
import { IGallery } from '../../../core/models/gallery.model.ts';
import SessionCard from '../Dashboard/SessionCard.tsx';
import ClientForm from './ClientForm.tsx';

const CreateSession = () => {
  const [clients, setClients] = useState<Array<{ firstname: string; lastname: string }>>([
    {
      firstname: '',
      lastname: '',
    },
  ]);
  const [step, setStep] = useState<number>(0);
  const [galleries, setGalleries] = useState<IGallery[]>([]);

  useEffect(() => {
    const getGalleries = async () => {
      const galleries = await flickrService.getGalleries('199637161@N05');
      for (const gallery of galleries) {
        gallery.primaryPhoto = await flickrService.getPhotoById(gallery.primaryPhoto.id);
      }

      setGalleries(galleries);
    };

    getGalleries();
  }, []);

  function addClient() {
    if (clients.length < 3) {
      setClients([...clients, { firstname: '', lastname: '' }]);
    }
  }

  function updateClient(index: number, client: any) {
    setClients(prevClients => [
      {
        ...prevClients[0],
        firstname: client.firstname,
        lastname: client.lastname,
      },
      ...prevClients.slice(1), // les autres clients restent inchangés
    ]);
  }

  return (
    <>
      <Header />
      <div className='p-3'>
        {step === 0 ? (
          <>
            <h1 className='text-xl mb-3 mt-3'>Client.s du projet</h1>
            {clients.map((client, index) => (
              <ClientForm key={index} firstname={client.firstname} lastname={client.lastname} index={index}
                          updateClient={updateClient} />
            ))}
            <button
              className='btn btn-outline btn-sm mt-5'
              onClick={addClient}
              disabled={clients.length >= 3}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
              </svg>
              Ajouter un client
            </button>

            <button
              className='btn btn-block bg-accent mt-10'
              disabled={!clients[0].firstname && !clients[0].lastname}
              onClick={() => setStep(step + 1)}
            >
              Suivant
            </button>
          </>
        ) : (
          <>
            <button className='btn btn-sm' onClick={() => setStep(step - 1)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                />
              </svg>
              retour
            </button>
            <h1 className='text-xl mb-3 mt-3'>Set d'images</h1>
            <div className='flex flex-col gap-3'>
              {galleries.length ? (
                galleries.map((gallery, index) => (
                  <ImageSetCard key={index} image={gallery.primaryPhoto.thumbnailUrl} title={'Set <nom du set>'} />
                ))
              ) : (
                <span className='self-center loading loading-spinner loading-lg'></span>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CreateSession;

const ImageSetCard = (props) => {
  const { image, title } = props;

  return (
    <>

      {image ? (
        <div className='w-full h-20 flex flex-none gap-3 p-3 bg-base-200 rounded-3xl'>
          <img
            src={image}
            className='h-16 w-16 object-cover rounded-2xl contrast-50 self-center'
            alt={`Image de couverture pour le projet ${title}`}
          ></img>
          <p className='self-center'>{title}</p>
        </div>
      ) : (
        <div className='skeleton w-40 h-56'></div>
      )}
    </>
  );
};
