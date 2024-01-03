import '../css_admin/AdminRight.css';
import tariph_img from '../media_admin/Group 2321.png';
import activity_admin from '../media_admin/Активность (3).png';
import quiz from '../media_admin/Rectangle 65 (1).png';
import horizontal from '../media_admin/more-horizontal.png';
import arrow_down_2 from '../media_admin/chevron-down.png';
import button_quiz from '../media_admin/Button.png';


function AdminRight() {
  return (
  <section className="admin-side-bar-right">
     <div className="side-bar-right">
        <div className="side-bar-right-top">
            <ul>
                <li className='tariph-text'>ТАРИФ</li>
                <li><img src={horizontal} alt="" /></li>
            </ul>
            <div className='img-tariph'>
                <div className="tariph-card-text">
                    <p>PREMIUM</p>
                    <h1>1490 ₽</h1>
                    <h2>ПОДПИСКА ДЕЙСТВУЕТ ДО 23.12.2025</h2>
                </div>
                <img src={tariph_img} alt="" />
            </div>
        </div>
        <div className="side-bar-right-bottom">
            <div className="right-bottom-text">
                <p>АНАЛИТИКА</p>
                <a href="&">Last Month <img src={arrow_down_2} alt="" /></a>
            </div>
            <div className='activity-images'>
                <img src={activity_admin} alt="" className="activ" />
                    <div className="quiz-block-text">
                        <h1>ПРОЙДИТЕ ОПРОС</h1>
                        <p>МЫ ХОТИМ УЗНАТЬ ВАС ПОЛУЧШЕ</p>
                        <div><img src={button_quiz} alt="" /></div>
                    </div>
                    <img src={quiz} alt="" className="quiz" />
            </div>
        </div>
     </div>
  </section>
  )
}

export default AdminRight;