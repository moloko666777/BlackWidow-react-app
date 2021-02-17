import React from 'react';
import head from '../style/Header.module.css';

import twitterIcon from '../image/twitter.svg';
import facebookIcon from '../image/Frame9.svg';
import youtubeIcon from '../image/youtube.svg';
import pinterestIcon from '../image/pinterest.svg';
import instagramIcon from '../image/instagram1.svg';
import MenuLinks from "./headerMenuLinks/MenuLinks";

const Header = () => {
    return (
        <header>
            <div className={head.social}>
                <ul>
                    <li><a href="#"><img src={twitterIcon} alt="facebook"/></a></li>
                    <li><a href="#"><img src={facebookIcon} alt="facebook"/></a></li>
                    <li><a href="#"><img src={youtubeIcon} alt="youtube"/></a></li>
                    <li><a href="#"><img src={pinterestIcon} alt="pinterest"/></a></li>
                    <li><a href="#"><img src={instagramIcon} alt="instagram"/></a></li>
                </ul>
            </div>
            <div className={head.logo}>
                <p>THE BLACK WIDOW</p>
            </div>
            <MenuLinks />
        </header>
    )
}

export default Header;