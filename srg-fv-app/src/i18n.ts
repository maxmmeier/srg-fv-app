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
            "applyForMembershipIntro" : "Hiermit erkläre ich meinen Beitritt zum Förderverein der Schiedsrichter-Gruppe Stuttgart e.V.\nDer Mitgliedsbeitrag beträgt 30,- EUR pro Jahr. Bei Minderjährigen ist die Unterschrift des/der Erziehungsberechtigen erforderlich.",
            "lastname" : "Name",
            "lastnamePlaceholder" : "Bitte Nachname eintragen",
            "firstname" : "Vorname",
            "firstnamePlaceholder" : "Bitte Vorname eintragen",
            "dateOfBirth" : "Geburtsdatum",
            "email" : "E-Mail",
            "emailPlaceholder" : "Bitte E-Mail Adresse eintragen",
            "street" : "Straße",
            "streetPlaceholder" : "Bitte Straße eintragen",
            "zipAndCity" : "PLZ / Ort",
            "zipPlaceholder" : "Bitte PLZ eintragen",
            "cityPlaceholder" : "Bitte Ort eintragen",
            "submit" : "Mitgliedschaft beantragen",
        }
      }
    }
  });

export default i18n;