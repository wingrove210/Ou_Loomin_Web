import '../css_admin/AdminLeft.css';
import users from '../media_admin/users.png';
import credit_card from '../media_admin/credit-card.png';
import life_buoy from '../media_admin/life-buoy.png';
import log_out from '../media_admin/log-out.png';
import settings from '../media_admin/settings.png';



function AdminLeft() {
  return (
  <section className="admin-side-bar-left">
    <div className="side-bar-left">
        <p>ПАНЕЛЬ УПРАВЛЕНИЯ</p>
        <ul className="side-bar-list-top">
            <li className="side-bar-link"><img src={users} alt="" /><a href="/profile">ПРОФИЛЬ</a></li>
            <li className="side-bar-link"><img src={credit_card} alt="" /><a href="/tariphs">ТАРИФ</a></li>
        </ul>
        <ul className="side-bar-list-middle">
            <li className="side-bar-link"><img src={settings} alt="" /><a href="/settings">НАСТРОЙКИ</a></li>
            <li className="side-bar-link"><img src={life_buoy} alt="" /><a href="/support">ТЕХ.ПОДДЕРЖКА</a></li>
        </ul>
        <ul className="side-bar-list-bottom">
            <li className="side-bar-link"><img src={log_out} alt="" /><a href="/profile">ВЫХОД</a></li>
        </ul>
    </div>
  </section>
  )
}

export default AdminLeft;