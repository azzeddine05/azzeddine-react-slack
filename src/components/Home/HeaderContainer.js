import React,  {useState, useEffect, Component} from 'react';
import LoginModal from './LoginModal';

import HeaderLayout from './HeaderLayout';

import { I18nProvider, LOCALES } from '../../i18n';




function HeaderContainer() {

        const [isOpen, setIsOpen] = useState(false);
        const [locale, setLocale] = useState(LOCALES.FRENSH);
        const [mainMenu, setMainMenu] = useState({float: 'right'});
        const [logoStyle, setLogoStyle] = useState({float: 'left'});
        const [topMenuStyle, setTopMenuStyle] = useState({float: 'right'})
        //const [dirRtl, setDirRtl] = useState('');
        const customProps = {
            isOpen,
            locale,
            mainMenu,
            logoStyle,
            topMenuStyle,
            setIsOpen,
            setLocale

          };
    
        useEffect(() => {
            if (locale === 'ar-ar') {
                setMainMenu({float: 'left'});
                setLogoStyle({float: 'right'});
                setTopMenuStyle({float: 'left'});
                //setDirRtl('dir="rtl"');
            
            }
        });
    
        return (
            <I18nProvider locale={locale}>
                <HeaderLayout {...customProps}></HeaderLayout>
            </I18nProvider>
                
                
        )

}

export default HeaderContainer;