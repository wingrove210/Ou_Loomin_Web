import '../css_admin/AdminEdit.css';
import AdminLeft from './AdminLeft';
import Header from '../Header';
import AdminTop from './AdminTop';
import AdminRight from './AdminRight';
import Avatar_img from '../media_admin/Avatar.png';
import Camera_img from '../media_admin/Group 38339.png';
import User_img from '../media_admin/User.png';
import Email_img from '../media_admin/Mail.png';
import Phene_img from '../media_admin/phone-call.png';
import Telega from '../media_admin/icons8-телеграмма-app 1.png';
import Go_Pro from '../media_admin/Галочки (2).png'
import linii from '../media_admin/Линиии (2).png'
import Section9 from '../Section9';


function  AdminEdit() {
  return (
  <section className="admin-edit">
      <Header />
      <div className='elements'>
              <AdminLeft />
              <AdminTop />
              <AdminRight />
      </div>
      <div className='main-admin-edit-sec'>
         <div className="main-admin-edit">
             <div className="admin-fields">
                <p className='profile-text'>ПРОФИЛЬ</p>
                <ul className="photo-field">
                  <li className='personal-data'>ПЕРСОНАЛЬНЫЕ ДАННЫЕ:</li>
                  <li className='profile-img'>
                      <div>
                                <img src={Avatar_img} alt="" className='ava'/>
                                <img src={Camera_img} alt="" className='camera' />
                      </div>
                      <p>Изменить фото</p>
                    </li>
                </ul>
                <ul className="main-fields-admin">
                   <li>
                      <p className="name-admin">ИМЯ</p>
                      <img src={User_img} alt="" className='user-image-holder'/>
                      <input type="text" placeholder='ИМЯ'/>
                   </li>
                   <li>
                      <p className="surname-admin">Фамилия</p>
                      <img src={User_img} alt="" className='user-image-holder'/>
                      <input type="text" placeholder='Ваша фамилия'/>
                   </li>
                   <li>
                      <p className="email-admin">Email</p>
                      <img src={Email_img} alt="" className='user-image-holder'/>
                      <input type="text" placeholder='distr0boy@gmail.com'/>
                   </li>
                   <li>
                      <p className="phonenumber-admin">Номер телефона</p>
                      <img src={Phene_img} alt="" className='user-image-holder'/>
                      <input type="text" placeholder='+7'/>
                   </li>
                   <li>
                      <p className="telegram-admin">Telegram</p>
                      <img src={Telega} alt="" className='user-image-holder'/>
                      <input type="text" placeholder='@vlados_drem'/>
                   </li>
                </ul>
             </div>
         </div>
      </div>
      <div className="go-pro-img">
         <img src={Go_Pro} alt="" />
      </div>
      <div className="lines-profile">
      <img src={linii} alt="" />
      </div>
      <div className='footer-profile-section'>
               <Section9 />
      </div>
  </section>
  )
}

export default AdminEdit;