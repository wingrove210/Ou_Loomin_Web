import '../css_admin/AdminTop.css';
import bell from '../media_admin/bell.png';
import avatar from '../media_admin/Avatar.png';
import arrow_down from '../media_admin/arrow-down.png';




function AdminTop() {
  return (
  <section className="admin-top-bar-section">
     <div className="admin-top-bar">
        <p className='hello-aliana'>ПРИВЕТ АЛИАНА</p>
        <ul className="top-bar-list">
           <li><img src={bell} alt="" className="bell" /></li>
           <li><img src={avatar} alt="" className="avatar" /></li>
           <li><p className="user-name">Алиана Меч..</p></li>
           <li><img src={arrow_down} alt="" className="arrow-down" /></li>
        </ul>
     </div>
  </section>
  )
}

export default AdminTop;