import React, { useContext, useEffect, useState } from 'react';
import { flickrService } from '../../../../core/services/flickr.service.ts';
import { SessionFormActions } from '../../../../core/enums/session-form-actions.ts';
import { IGallery } from '../../../../core/models/gallery.model.ts';
import ImageSetCard from '../../../../shared/components/ImageSetCard.tsx';
import { SessionFormContext } from '../../../../context/SessionForm/SessionFormContext.tsx';

const ImageSets = () => {
  const [galleries, setGalleries] = useState<IGallery[]>([]);

  const { state, dispatch } = useContext(SessionFormContext);

  useEffect(() => {
    const getGalleries = async () => {
      const galleries = await flickrService.getGalleries('199637161@N05');
      for (const gallery of galleries) {
        gallery.primaryPhoto = await flickrService.getPhotoById(gallery.primaryPhoto.id);
      }

      setGalleries(galleries);
    };

    getGalleries(); // TODO je sais pas comment faire ça autrement mais je pense que ça peut être changé
  }, []);

  function onClickCard(cardId: string) {
    console.log(cardId);
    dispatch({
      type: SessionFormActions.setGallery,
      payload: galleries.find((gallery) => gallery.id === cardId),
    });
  }

  function onClickNext() {
    if (state.clients.length < 0) {
      return;
    }

    dispatch({ type: SessionFormActions.setNextStep });
  }

  return (
    <div className="w-full flex flex-col gap-2">
      <h2 className="text-xl mb-4">Sélectionner le set d'images</h2>

      {galleries.length ? (
        <>
          {galleries?.map((gallery, index) => (
            <div key={index}>
              <ImageSetCard
                image={gallery.primaryPhoto.thumbnailUrl}
                title={gallery.title}
                galleryId={gallery.id}
                clickCard={onClickCard}
              />
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="skeleton w-full h-20"></div>
          <div className="skeleton w-full h-20"></div>
        </>
      )}

      <button className="btn btn-block mt-5" disabled={!state.gallery} onClick={onClickNext}>
        Suivant
      </button>
    </div>
  );
};

export default ImageSets;
