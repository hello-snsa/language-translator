import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";

import "./App.css";
import DropDown from './components/utility/DropDown';
import lang from './components/utility/Languages.json';

function App() {
  const { t } = useTranslation();

  //Get data of all the languages.
  const languages = lang.languages;
  //Get the current language Code.
  const currentLangCode = Cookies.get('i18next') || 'en';
  //Get all the data of the current language.
  const currentLang = languages.find(l => l.code === currentLangCode);

  //Get direction from current language and update the direction in  document file.
  useEffect(() => {
    document.body.dir = currentLang.dir || 'ltr';
    document.title = t('title')
  }, [currentLang]);

  return (
    <div className='container'>
      <div className='d-flex flex-column align-item-start'>
        <div className='headerDiv'>
          <div className='dropdown'>
            <DropDown />
          </div>
          <h2>{t('Welcome')}</h2>
        </div>
        <div>

          <button className="btn-Cancel" onClick={() => alert(t('cancel') + ` ${' '} cancel`)}>
            {t('cancel')}
          </button>

          <button className="btn-Send" onClick={() => alert(t('send') + ` ${' '} send`)}>
            {t('send')}
          </button>

        </div>
      </div>
    </div >
  )
}
export default App;

