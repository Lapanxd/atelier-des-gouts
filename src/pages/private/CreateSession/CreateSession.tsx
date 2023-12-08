import { Header } from '../../../shared/components/Header.tsx';
import { BackButton } from '../../../shared/components/BackButton.tsx';
import { flickrService } from '../../../core/services/flickr.service.ts';

const CreateSession = () => {
  async function test() {
    console.log(await flickrService.listGalleries('199637161@N05'));
  }

  return (
    <>
      <Header />
      <div className='p-3'>
        <BackButton />

        <div className='mt-3 flex gap-2'>
          <div>
            <label className='pl-2'>Prénom</label>
            <input
              type='text'
              placeholder='Ex: John'
              className='input input-bordered w-full max-w-xs'
            />
          </div>
          <div>
            <label className='pl-2'>Nom</label>
            <input
              type='text'
              placeholder='Ex: Doe'
              className='input input-bordered w-full max-w-xs'
            />
          </div>
        </div>
        <button className='btn btn-outline btn-sm mt-5' onClick={test}>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
               stroke='currentColor' className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
          </svg>
          Ajouter un client
        </button>

      </div>
    </>
  );
};

export default CreateSession;