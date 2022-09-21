import i18n from "i18next";
import Backend from "i18next-http-backend";
import LangDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LangDetector)
  .init({
    // supportedLngs: ["hu", "de", "en"],
    fallbackLng: "hu",
    detection: {
      order: [
        // "cookie",
        // "htmlTag",
        "localStorage",
        // "sessionStorage",
        // "path",
        // "subdomain",
      ],
      // caches: ["cookie"],
    },
    ns: ["questions"],
    backend: {
      loadPath: "/languages/{{ns}}/{{lng}}.json",
    },
    debug: false,
    interpolation: {
      espaceValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
      useSuspense: true,
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "i", "b", "li"],
    },
    returnObjects: true,
  });

export default i18n;

// i18next
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .use(LangDetector)
//   .use(Backend)
//   .init({
//     supportedLngs: ["hu", "de", "en"],
//     fallbackLng: "hu",
//     detection: {
//       order: [
//         "cookie",
//         "htmlTag",
//         "localStorage",
//         "sessionStorage",
//         "path",
//         "subdomain",
//       ],
//       caches: ["cookie"],
//     },
//     ns: ["questions"],
//     backend: {
//       loadPath: "/assets/languages/{{ns}}/{{lng}}.json",
//     },
//     returnObjects: true,
//     react: {
//       useSuspense: true,
//     },
//   });
