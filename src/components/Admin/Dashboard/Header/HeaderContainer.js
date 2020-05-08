import React,  {useState, useEffect, useLayoutEffect, Component} from 'react';

import HeaderLayout from './HeaderLayout';

import { I18nProvider, LOCALES } from '../../../../i18n';




function HeaderContainer() {

    const [isOpen, setIsOpen] = useState(false);
    const [mainMenu, setMainMenu] = useState({float: 'right'});
    const [logoStyle, setLogoStyle] = useState({float: 'left'});
    const [topMenuStyle, setTopMenuStyle] = useState({float: 'right'})
    const [dirRtl, setDirRtl] = useState('');
    const [activeLanguage, setActiveLanguage] = useState('English');
    //const [activeLanguageFr, setActiveLanguageFr] = useState('Français');


    function useLocaleState(localeItem) {
        const[localeLanguage, setLocaleLanguage] = useState(localStorage.getItem(localeItem));

        function setLanguage(newLanguage) {
            localStorage.setItem(localeItem, newLanguage);
            setLocaleLanguage(newLanguage);
        }

        return [localeLanguage, setLanguage];
    }

    const [locale, setLocale] = useLocaleState(LOCALES.ENGLISH);


    const handleArabe = () => {

        setLocale(LOCALES.ARABE);
        setMainMenu({float: 'left'});
        setLogoStyle({float: 'right'});
        setTopMenuStyle({float: 'left'});
        setDirRtl('rtl');
        setActiveLanguage('العربية ');

    }

    const handleLanguage = (language) => {

        setLocale(language);
        setMainMenu({float: 'right'});
        setLogoStyle({float: 'left'});
        setTopMenuStyle({float: 'right'});
        setDirRtl('');

        if (language === 'ar-ar') {
            handleArabe();
        }

    }

    useEffect(() => {

        handleLanguage(locale);
    }, [locale]);


    const customProps = {
        isOpen,
        locale,
        mainMenu,
        logoStyle,
        topMenuStyle,
        setIsOpen,
        setLocale,
        dirRtl,
        setDirRtl,
        activeLanguage,
        setActiveLanguage,
        handleArabe,
        handleLanguage,

    };

    return (
        <I18nProvider locale={locale}>
            <HeaderLayout {...customProps}></HeaderLayout>
        </I18nProvider>


    )

}

export default HeaderContainer;