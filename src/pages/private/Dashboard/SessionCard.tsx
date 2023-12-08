import React from 'react';

interface SessionCardProps {
  image: string;
  title: string;
  date: Date;
}

const SessionCard: React.FC<SessionCardProps> = (props) => {
  const { image, title, date } = props;
  return (
    <>
      <div className='w-40 flex-none'>
        {image ? <img
          src={image} className='h-56 w-full object-cover rounded-3xl contrast-50'
          alt={`Image de couverture pour le projet ${title}`}
        ></img> : <div className='skeleton w-40 h-56'></div>}
        <div className='ml-1'>
          <p className='font-medium'>{title}</p>
          <p className='-mt-1 text-zinc-500 text-xs	'>{date}</p>
        </div>

      </div>
    </>
  );
};

export default SessionCard;