import React from "react";
import './css/Menu.css'
import close from './media/icons8-close-64.png'
import {useState} from 'react';

const Menu = ({active, setActive}) => {
    const [menuActive, setMenuActive] = useState(false)
    return (
    <div className={active ? 'menu-section active' : 'menu-section'} onClick={()=> setActive(false)}>
        <img src={close} alt="" className="close-btn" onClick={()=>setMenuActive(menuActive)}/>
        <div className='header-btns'>
            <button className="enter-btn">Вход</button>
            <button className="reg-btn">Регистрация </button>
        </div>
    </div>
    );
};

export default Menu;