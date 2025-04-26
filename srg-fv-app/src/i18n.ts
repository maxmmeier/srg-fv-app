import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'de',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    de: {
      translation: {
        applyForMembership: 'Mitgliedsantrag',
        supportAssociationSrgStuttgart: 'Förderverein SRG Stuttgart',
        applyForMembershipIntro:
          'Hiermit erkläre ich meinen Beitritt zum Förderverein der Schiedsrichter-Gruppe Stuttgart e.V.\nDer Mitgliedsbeitrag beträgt 30,- EUR pro Jahr. Bei Minderjährigen ist die Unterschrift des/der Erziehungsberechtigen erforderlich.',
        lastname: 'Nachname',
        lastnamePlaceholder: 'Bitte Nachname eintragen',
        firstname: 'Vorname',
        firstnamePlaceholder: 'Bitte Vorname eintragen',
        dateOfBirth: 'Geburtsdatum',
        email: 'E-Mail',
        emailPlaceholder: 'Bitte E-Mail Adresse eintragen',
        street: 'Straße',
        streetPlaceholder: 'Bitte Straße eintragen',
        zipAndCity: 'PLZ / Ort',
        zipPlaceholder: 'Bitte PLZ eintragen',
        cityPlaceholder: 'Bitte Ort eintragen',
        submit: 'Mitgliedschaft beantragen',
        signatureMemberOrParent:
          'Unterschrift Mitglied / Erziehungsberechtigte/r',
        Sepa: 'SEPA Lastschriftmandat',
        SepaIntro:
          'Ich ermächtige den Förderverein der Schiedsrichter-Gruppe Stuttgart e. V. den Mitgliedsbeitrag von meinem Konto mittels Lastschrift einzuziehen. Zugleich weise ich mein Kreditinstitut an, die von dem Förderverein der Schiedsrichter-Gruppe Stuttgart e. V. auf mein Konto gezogenen Lastschriften einzulösen.',
        SepaNotice:
          'Hinweis: Ich kann innerhalb von acht Wochen, beginnend mit dem Belastungsdatum, die Erstattung des belasteten Betrages verlangen. Es gelten dabei die mit meinem Kreditinstitut vereinbarten Bedingungen.',
        SepaInfos: 'Gläubiger-Identifikationsnummer: DE89ZZZ00001897918',
        MemberNotAccountHolder: 'Abweichende/r Kontoinhaber/in',
        bank: 'Bank',
        bankPlaceholder: 'Bitte Namen der Bank eintragen',
        bic: 'BIC',
        bicPlaceholder: 'Bitte BIC eintragen',
        signatureSepa: 'Unterschrift Kontoinhaber/in',
        iban: 'IBAN',
        ibanPlaceholder: 'Bitte IBAN eintragen',
        mandate: 'Mandatsreferenz',
        mandatePlaceholder: 'Bitte Mandatsreferenz eingeben',
        lastnameFeedback: 'Bitte Nachnamen eintragen!',
        firstnameFeedback: 'Bitte Vornamen eintragen!',
        emailFeedback: 'Bitte E-Mail Adresse eintragen!',
        dateOfBirthFeedback: 'Bitte Geburtstag eintragen!',
        streetFeedback: 'Bitte Straße eintragen!',
        zipAndCityFeedback: 'Bitte PLZ / Ort eintragen!',
        bankFeedback: 'Bitte Namen der Bank eintragen!',
        bicFeedback: 'Bitte BIC eintragen!',
        ibanFeedback: 'Bitte IBAN eintragen!',
        mandateFeedback: 'Bitte Mandatsreferenz eintragen!',
        signatureFeedback: 'Bitte Unterschreiben!',
        login: 'Login',
        logout: 'Logout',
        members: 'Mitglieder',
        pageNotFound: 'Die Seite wurde nicht gefunden',
        id: '#',
        downloadPdf: 'Donwload PDF',
      },
    },
  },
});

export default i18n;
