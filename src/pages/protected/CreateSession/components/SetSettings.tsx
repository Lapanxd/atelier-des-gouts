import React, { useContext, useEffect, useState } from 'react';
import { SessionFormContext } from '../../../../context/SessionForm/SessionFormContext.tsx';
import { flickrService } from '../../../../core/services/flickr.service.ts';
import { SessionFormActions } from '../../../../core/enums/session-form-actions.ts';
import { Nullable } from '../../../../core/types/nullable.ts';

const SetSettings = () => {
  const { state, dispatch } = useContext(SessionFormContext);

  const [images, setImages] = useState([]);
  const [firstImage, setFirstImage] = useState<Nullable<{ url: string, index: number }>>(null);
  const [secondImage, setSecondImage] = useState<Nullable<{ url: string, index: number }>>(null);

  useEffect(() => {
    if (state.duoImages.length === 0) { // TODO: refacto (workaround pour ne re avoir les images qu'on a déjà selectionnée mais du coup y en a plus du tout là)
      const galleryPhotos = async () => {
        const fetchData = await flickrService.getGalleryPhotos(state.gallery.id);

        for (const image of fetchData) {
          const img = await flickrService.getPhotoById(image);
          setImages((prevImages) => [...prevImages, { url: img.url, selected: false }]);
        }
      };

      galleryPhotos();
    }
  }, []);

  function setDuoImages(imageUrl, imageIndex) {
    !firstImage ? setFirstImage({ url: imageUrl, index: imageIndex }) : setSecondImage({
      url: imageUrl,
      index: imageIndex,
    });
    setImages(images.map((img, idx) => (idx === imageIndex ? { ...img, selected: true } : img)));
  }

  function saveDuo() {
    if (!(firstImage && secondImage)) {
      return;
    }

    dispatch({
      type: SessionFormActions.addDuo,
      payload: [firstImage.url, secondImage.url],
    });

    console.log('images', images);

    const tmp = images;
    tmp.splice(firstImage.index, 1);
    tmp.splice(secondImage.index - 1, 1);

    setImages(tmp);


    console.log(tmp);

    setFirstImage(null);
    setSecondImage(null);
  }

  return (
    <div className='max-w-max'>
      <h2 className='text-xl mb-4'>Créer les duos d'images</h2>
      <div className='flex'>
        <img src={firstImage?.url} className='w-1/2 rounded-lg object-cover px-1' />

        <img src={secondImage?.url} className='w-1/2 rounded-lg	object-cover px-1' />
      </div>

      <button
        className='btn btn-wide mt-2'
        disabled={!(firstImage && secondImage)}
        onClick={saveDuo}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 12.75 6 6 9-13.5' />
        </svg>
        Valider le duo d'images
      </button>

      <div className='flex flex-wrap mt-2'>
        {images?.map((image, index) => (
          <div
            key={index}
            className='w-1/3 px-1 mt-2'
            onClick={() => setDuoImages(image.url, index)}
          >
            <img
              className={`rounded-lg duration-75 w-full h-32 object-cover ${
                image.clicked ? 'brightness-50 hover:grayscale' : null
              }`}
              src={image.url || ''}
            />
          </div>
        ))}
      </div>

      <button className='btn btn-block mt-5' disabled={!state.duoImages.length}>
        Créer la session
      </button>
    </div>
  );
};

export default SetSettings;
