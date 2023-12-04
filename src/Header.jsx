import './App.css';
import menu from './media/menu.png'
import React, {useState} from 'react';
import Menu from './Menu';

function Header(){
    const [menuActive, setMenuActive] = useState(false)
    return(
        <div className="header-section">
            <header>
                <h3 className="logo">OU LOOMIN</h3>
                <div className="costs">
                    <ul>
                        <p className="costs-item">О приложении</p>
                        <p className="costs-item">Тарифы</p>
                        <p className="costs-item">О нас</p>
                        <div className="header-buttons">
                            <a href='/register' style={{textDecoration: "none", paddingTop: "10px"}} className="registration">Регистрация</a>
                            <div className="btn-login">
                                <button className="login">Вход</button>
                            </div>
                        </div>
                    </ul>
                    <img src={menu} alt="" className="menu" onClick={()=>setMenuActive(!menuActive)}/>
                </div>
            </header>
            <Menu active={menuActive} setActive={setMenuActive}/>
        </div>
    );
}

export default Header;