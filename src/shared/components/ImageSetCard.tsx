import React, { useState } from 'react';
import { Simulate } from 'react-dom/test-utils';
import click = Simulate.click;

export interface ImageSetCardProps {
  image: string;
  title: string;
  galleryId: string;
  clickCard: (cardId: string) => void;
}

const ImageSetCard = (props) => {
  const { image, title, galleryId, clickCard } = props;
  const [clicked, setClicked] = useState(false);

  function onClickCard() {
    setClicked(true);
    clickCard(galleryId);
  }

  return (
    <>
      {image ? (
        <div
          className={`w-full h-20 flex flex-none gap-3 pl-2 bg-base-200 rounded-3xl hover:bg-base-300 cursor-pointer ${
            clicked ? 'border-solid border-2 border-blue-800' : null
          }`}
          onClick={onClickCard}
        >
          <img
            src={image}
            className="h-16 w-16 object-cover rounded-2xl contrast-50 self-center"
            alt={`Image de couverture pour le projet ${title}`}
          ></img>
          <p className="self-center">{title}</p>
        </div>
      ) : (
        <div className="skeleton w-40 h-56"></div>
      )}
    </>
  );
};

export default ImageSetCard;
