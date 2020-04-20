import React,  {useState, useEffect, Component} from 'react';
import LoginModal from './LoginModal';
import { LOCALES } from '../../i18n';
import translate from '../../i18n/translate';


class HeaderContainer extends Component {

    render() {
        return (
            <header className="header clearfix element_to_stick">
                <div className="container">
                    <div style={this.props.logoStyle} id="logo">
                        <a href="index.html">
                        <img src="img/logo.svg" width={140} height={35} alt="" className="logo_normal" />
                        <img src="img/logo_sticky.svg" width={140} height={35} alt="" className="logo_sticky" />
                        </a>
                    </div>
                    <ul style={this.props.topMenuStyle} id="top_menu">
                        <li><a onClick= {(e) =>this.props.setIsOpen(true)} id="sign-in" className="login" title="Login/Register">Sign In</a></li>
                        <li><a href="wishlist.html" className="wishlist_bt_top" title="Your wishlist">Your wishlist</a></li>
                    </ul>
                    {/* /top_menu */}
                    <a href="#0" className="open_close">
                        <i className="icon_menu" /><span>Menu</span>
                    </a>
                    <nav style={this.props.mainMenu} className="main-menu">
                        <div id="header_menu">
                            <a href="#0" className="open_close">
                                <i className="icon_close" /><span>Menu</span>
                            </a>
                            <a href="index.html"><img src="img/logo.svg" width={140} height={35} alt="" /></a>
                        </div>
                        <ul>
                            <li className="submenu">
                                <a href="#0" className="show-submenu">{translate("home")}</a>
                            </li>
                            <li className="submenu">
                                <a href="#0" className="show-submenu">Listing</a>
                            </li>
                            <li className="submenu">
                                <a onClick={() => this.props.setLocale(LOCALES.FRENSH)} className="show-submenu">Frensh</a>
                                <ul>
                                <li><a onClick={() => this.props.setLocale(LOCALES.ENGLISH)} >English</a></li>
                                <li><a onClick={() => this.props.setLocale(LOCALES.ARABE)}>العربية</a></li>
            
                                </ul>
                            </li>
                            <li><a className="partner-register" href={'/register'}>Submit</a></li>
                            <li><a href="#0">Solutions</a></li>
                            <li><a href="#0">Pricing</a></li>
                            
                        </ul>
                    </nav>
                </div>
                <LoginModal isOpen={this.props.isOpen} onClose={(e) => this.props.setIsOpen(false)}/>
            </header>                
                
        )
    }

}

export default HeaderContainer;