import React,  {useState, useEffect} from 'react';
import LoginModal from './LoginModal';

import { I18nProvider, LOCALES } from '../../i18n';

import translate from '../../i18n/translate';



function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [locale, setLocale] = useState(LOCALES.FRENSH);
    const [mainMenu, setMainMenu] = useState({float: 'right'});
    const [logoStyle, setLogoStyle] = useState({float: 'left'});
    const [topMenuStyle, setTopMenuStyle] = useState({float: 'right'})
    //const [dirRtl, setDirRtl] = useState('');

    console.log("locale here");
    console.log(locale);
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
                <header className="header clearfix element_to_stick">
                    <div className="container">
                        <div style={logoStyle} id="logo">
                            <a href="index.html">
                            <img src="img/logo.svg" width={140} height={35} alt="" className="logo_normal" />
                            <img src="img/logo_sticky.svg" width={140} height={35} alt="" className="logo_sticky" />
                            </a>
                        </div>
                        <ul style={topMenuStyle} id="top_menu">
                            <li><a onClick= {(e) =>setIsOpen(true)} id="sign-in" className="login" title="Login/Register">Sign In</a></li>
                            <li><a href="wishlist.html" className="wishlist_bt_top" title="Your wishlist">Your wishlist</a></li>
                        </ul>
                        {/* /top_menu */}
                        <a href="#0" className="open_close">
                            <i className="icon_menu" /><span>Menu</span>
                        </a>
                        <nav style={mainMenu} className="main-menu">
                            <div id="header_menu">
                                <a href="#0" className="open_close">
                                    <i className="icon_close" /><span>Menu</span>
                                </a>
                                <a href="index.html"><img src="img/logo.svg" width={140} height={35} alt="" /></a>
                            </div>
                            <ul>
                                <li className="submenu">
                                    <a href="#0" className="show-submenu">{translate("home")}</a>
                                    <ul>
                                        <li><a href="index.html">Default</a></li>
                                        <li><a href="index-2.html">Video Background</a></li>
                                        <li><a href="index-3.html">Slider</a></li>
                                        <li><a href="index-4.html">GDPR Cookie Bar EU Law</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#0" className="show-submenu">Listing</a>
                                    <ul>
                                        <li className="third-level"><a href="#0">List pages</a>
                                            <ul>
                                            <li><a href="grid-listing-filterscol.html">List default</a></li>
                                            <li><a href="grid-listing-filterscol-map.html">List with map</a></li>
                                            <li><a href="grid-listing-filterscol-full-width.html">List full width</a></li>
                                            <li><a href="grid-listing-filterscol-full-masonry.html">List Masonry Filter</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="detail-restaurant.html">Detail page 1</a></li>
                                        <li><a href="detail-restaurant-2.html">Detail page 2</a></li>
                                        <li><a href="submit-restaurant.html">Submit Restaurant</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="admin_section/index.html" target="_blank">Admin Section</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a onClick={() => setLocale(LOCALES.FRENSH)} className="show-submenu">Frensh</a>
                                    <ul>
                                    <li><a onClick={() => setLocale(LOCALES.ENGLISH)} >English</a></li>
                                    <li><a onClick={() => setLocale(LOCALES.ARABE)}>العربية</a></li>
                
                                    </ul>
                                </li>
                                <li><a className="partner-register" href={'/register'}>Submit</a></li>
                                <li><a href="#0">Solutions</a></li>
                                <li><a href="#0">Pricing</a></li>
                                
                           </ul>
                        </nav>
                    </div>
                    <LoginModal isOpen={isOpen} onClose={(e) => setIsOpen(false)}/>
                </header>
            </I18nProvider>
                
                
        )

}

export default Header;