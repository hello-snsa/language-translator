import React from 'react'
import 'flag-icons/css/flag-icons.min.css';

import { Dropdown } from 'react-bootstrap';
import lang from './Languages.json';
import i18next from 'i18next';
import Cookies from 'js-cookie';

export default function DropDown() {
    const langImg = 'assets/images/language.png'

    const languages = lang.languages;
    const currentLangCode = Cookies.get('i18next') || 'en';

    return (
        < Dropdown >
            <Dropdown.Toggle style={{ width: "50px", height: "50px", backgroundColor: "transparent", borderColor: "transparent" }} >
                <img src={langImg} style={{ width: "50px", height: "100%" }} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {languages.map(({ code, name, country }) => (

                    <Dropdown.Item key={country}
                        //this will change the language.
                        onClick={() => i18next.changeLanguage(code)}

                        disabled={code === currentLangCode}
                    >
                        <span className={`fi fi-${country} mx-2`}
                            style={{ opacity: code === currentLangCode ? 0.5 : 1 }}
                        > </span>
                        {name}

                    </Dropdown.Item>
                )

                )}

            </Dropdown.Menu>
        </ Dropdown>
    )
}
