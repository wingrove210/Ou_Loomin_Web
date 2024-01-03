import '../css_admin/AdminSettings.css';
import AdminLeft from './AdminLeft';
import Header from '../Header';
import AdminTop from './AdminTop';
import AdminRight from './AdminRight';
import Section9 from '../Section9';



function  AdminSettings() {
  return (
  <section className="admin-edit">
      <Header />
      <div className='elements'>
              <AdminLeft />
              <AdminTop />
           <div className='settings-section-right'>
              <AdminRight />
           </div>
      </div>
      <div className="settings-section">
          <div className="main-edit-settings">
          <div className="admin-fields">
                <p className='password-text'>ПРОФИЛЬ</p>
                <ul className="main-password-admin">
                   <li>
                       <p className="chenge-password">СМЕНИТЬ ПАРОЛЬ:</p>
                      <p className="last-password">СТАРЫЙ ПАРОЛЬ</p>
                      <input type="password" placeholder='password'/>
                      <p>Forgot</p>
                   </li>
                   <li>
                      <p className="new-password">НОВЫЙ ПАРОЛЬ</p>
                      <input type="password" placeholder='password'/>
                      <p>Forgot</p>
                   </li>
                   <li>
                      <p className="new-password">НОВЫЙ ПАРОЛЬ</p>
                      <input type="password" placeholder='password'/>
                      <p>Forgot</p>
                   </li>
                </ul>
             </div>
          </div>
      </div>
      <div className='footer-settings-section'>
               <Section9 />
      </div>
  </section>
  )
}

export default AdminSettings;