import { Header } from '../../../shared/components/Header.tsx';
import { flickrService } from '../../../core/services/flickr.service.ts';
import React, { useContext, useEffect, useState } from 'react';
import { IGallery } from '../../../core/models/gallery.model.ts';
import SessionFormProvider, {
  SessionFormContext,
} from '../../../context/SessionForm/SessionFormContext.tsx';
import { SessionFormActions } from '../../../core/enums/session-form-actions.ts';
import Accordion from './components/Accordion.tsx';
import FormSteps from './components/FormSteps.tsx';

const CreateSession = () => {
  const [step, setStep] = useState<number>(0);
  const [galleries, setGalleries] = useState<IGallery[]>([]);

  const { state, dispatch } = useContext(SessionFormContext);

  useEffect(() => {
    const getGalleries = async () => {
      const galleries = await flickrService.getGalleries('199637161@N05');
      for (const gallery of galleries) {
        gallery.primaryPhoto = await flickrService.getPhotoById(gallery.primaryPhoto.id);
      }

      setGalleries(galleries);

      dispatch({
        type: SessionFormActions.setClient,
        payload: { firstname: 'test', lastname: 'test' },
      });
    };

    getGalleries();
  }, []);

  return (
    <>
      <Header />
      <h1 className="font-bold text-3xl mt-10 mb-10">Créer une nouvelle session</h1>
      <SessionFormProvider>
        <div className="flex gap-10">
          <div className="w-2/6">
            <Accordion />
          </div>
          <div className="w-full">
            <FormSteps />
          </div>
        </div>
      </SessionFormProvider>
    </>
  );
};

export default CreateSession;
