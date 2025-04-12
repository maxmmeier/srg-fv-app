import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      de: {
        translation: {
            "applyForMembership" : "Mitgliedsantrag",
            "supportAssociationSrgStuttgart" : "Förderverein SRG Stuttgart",

        }
      }
    }
  });

export default i18n;