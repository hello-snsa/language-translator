import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'hi', 'ur'],
    fallbackLng: "en",

    //This will detect the language from below order.
    detection: {
      order: ['path', 'cookie', 'querystring', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'subdomain'],
      //we can cache user language on 'localStorage'or 'cookie'
      caches: ['cookie']
    },

    //To access translation files.
    backend: {
      loadPath: 'assets/internationalization/locales/{{lng}}/translation.json'
    },
  });

//Loading text message: Shows before the actual view renders.
const loadingMarkup = (
  <div className="py-4 text-center">
    <h1>Loading... Please Wait.</h1>
  </div>
)

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />,
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
