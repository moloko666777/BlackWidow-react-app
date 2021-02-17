import React from 'react';
import head from '../../style/Header.module.css';

const Menu = () => {
    return (
        <div className={head.menu}>
            <ul className={head.list}>
                <li><a href="#">HOME</a></li>
                <li><a href="#">MISSION</a></li>
                <li><a href="#">CHARITY</a></li>
                <li><a href="#">ABOUT US</a></li>

                {/*<li>*/}
                {/*    <div className={head.dropDown}>*/}
                {/*        <a href="#">about us</a>*/}
                {/*    </div>*/}
                {/*    <ul className={head.submenu}>*/}
                {/*        <li><a href="#">mission</a></li>*/}
                {/*        <li><a href="#">the founder</a></li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                <li><a href="#">COLLABORATION</a></li>
                <li><a href="#">YOUR STORY</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">THE AMBASSADOR</a></li>
                <li><a href="#">NEWS ROOM</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </div>
    )
}

export default Menu;