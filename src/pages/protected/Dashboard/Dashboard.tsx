import { Header } from '../../../shared/components/Header.tsx';
import SessionCard from './SessionCard.tsx';
import NewSessionButton from './NewSessionButton.tsx';

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className='p-3'>
        <h1 className='text-xl mb-3'>
          Les sessions en cours <small>(4)</small>
        </h1>
        <div className='flex overflow-auto gap-3'>
          <SessionCard
            image={'https://shorturl.at/zBIOQ'}
            title='Nom du projet'
            date={new Date().toDateString()}
          />

        </div>

        <h1 className='text-xl mt-10 mb-3'>
          Les sessions terminées <small>(4)</small>
        </h1>
        <div className='flex overflow-auto gap-3'>
          <SessionCard
            image={'https://shorturl.at/zKVZ2'}
            title='Nom du projet'
            date={new Date().toDateString()}
          />
        </div>
        <NewSessionButton />
      </div>
    </>
  );
};

export default Dashboard;
