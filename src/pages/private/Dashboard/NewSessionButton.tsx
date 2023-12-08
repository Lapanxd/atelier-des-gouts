import { Link } from 'react-router-dom';

const NewSessionButton = () => {
  return (
    <>
      <Link to='create-session'>
        <button className='btn btn-accent fixed bottom-5 right-5'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
               stroke='currentColor'
               className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
          </svg>
          Créer une nouvelle session
        </button>
      </Link>
    </>
  );
};

export default NewSessionButton;