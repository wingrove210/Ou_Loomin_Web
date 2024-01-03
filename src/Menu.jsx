import React from "react";
import './css/Menu.css'
import close from './media/icons8-close-64.png'
import {useState} from 'react';

const Menu = ({active, setActive}) => {
    const [menuActive, setMenuActive] = useState(false)
    return (
    <div className={active ? 'menu-section active' : 'menu-section'} onClick={()=> setActive(false)}>
        {/* <img src={close} alt="" className="close-btn" onClick={()=>setMenuActive(menuActive)}/> */}
            <div className="menu">
                <input type="checkbox" id="checkbox" onClick={() => setMenuActive(menuActive)} />
                <label for="checkbox" class="toggle-2">
                    <div className="bars" id="bar1"></div>
                    <div className="bars" id="bar2"></div>
                    <div className="bars" id="bar3"></div>
                </label>
            </div>
        <div className='header-btns'>
            <a href='auth' className="enter-btn">Вход</a>
            <a href='register' className="reg-btn">Регистрация </a>
        </div>
    </div>
    );
};

export default Menu;