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
                        <a className="costs-item" href='#about'>О приложении</a>
                        <a className="costs-item" href='#costs'>Тарифы</a>
                        <a className="costs-item" href='#faq'>FAQ</a>
                        <div className="header-buttons">
                        <a href='register' class="buttonHover-reg">Регистрация</a>
                            {/* <a href='/register' style={{textDecoration: "none", paddingTop: "10px"}} className="registration">Регистрация</a> */}
                            <div className="btn-login">
                                <a href='auth' className="login">Вход</a>
                            </div>
                        </div>
                    </ul>
                    {/* <img src={menu} alt="" className="menu" onClick={()=>setMenuActive(!menuActive)}/> */}
                    <div className='menu'>
                        <input type="checkbox" id="checkbox" onClick={()=>setMenuActive(!menuActive)}/>
                        <label for="checkbox" class="toggle">
                            <div className="bars" id="bar1"></div>
                            <div className="bars" id="bar2"></div>
                            <div className="bars" id="bar3"></div>
                        </label>
                    </div>
                </div>
            </header>
            <Menu active={menuActive} setActive={setMenuActive}/>
        </div>
    );
}

export default Header;