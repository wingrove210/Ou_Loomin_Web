import '../css_admin/AdminTarihps.css';
import AdminLeft from './AdminLeft';
import Header from '../Header';
import AdminTop from './AdminTop';
import AdminRight from './AdminRight';
import { Accordion } from '../Accordion/Accordion';
import tariph_1 from '../media_admin/Group 15.png';
import tariph_2 from '../media_admin/Group 16.png';
import tariph_3 from '../media_admin/На год.png';
import tariph_4 from '../media_admin/Навсегда.png';
import logo_ukassa from '../media_admin/logo (2).png';
import logo_sbp from '../media_admin/logo (3).png';
import arrow_right from '../media_admin/arrow-right.png'
import Section9 from '../Section9';



function  AdminTariphs() {
  return (
  <section className="admin-edit">
      <Header />
      <div className='elements'>
              <AdminLeft />
              <AdminTop />
              <div className='tariphs-block-right'>
                <AdminRight />
              </div>
      </div>
      <div className="tariphs-section">
          <div className="main-edit-tariphs">
            <div className="tariphs-block">
                <p>ТАРИФЫ</p>
                <h3>ВЫБЕРИТЕ ТАРИФ:</h3>
                <ul className="tariphs-flex">
                   <li>
                      <div class="card">
                        <div class="content-box">
                          <span class="card-title"><span className='grey-text-title'>PLUS</span><br></br>0 P</span>
                          <ul className='card-content'>
                              <li>2 медитации каждой категории </li>
                              <li>тех.поддержка 24/7</li>
                              <li>Личный чат с создателями</li>
                              <li>Истории</li>
                          </ul>
                          {/* <span class="see-more">See More</span> */}
                        </div>
                        {/* <div class="date-box">
                          <span class="month">JUNE</span>
                          <span class="date">29</span>
                        </div> */}
                      </div>
                   </li>
                   <li>
                   <div class="card">
                        <div class="content-box second">
                          <span class="card-title"><span className='grey-text-title'>PLUS</span><br></br>37 980 P</span>
                          <ul className="card-content">
                              <li>Все медитации каждой категории <br/> навсегда</li>
                              <li>тех.поддержка 24/7</li>
                              <li> Личный чат с создателями навсегда</li>
                              <li>Доступ к новым функция навсегда</li>
                          </ul>
                          {/* <span class="see-more">See More</span> */}
                        </div>
                        {/* <div class="date-box">
                          <span class="month">JUNE</span>
                          <span class="date">29</span>
                        </div> */}
                      </div>
                    </li>
                   <li>
                   <div class="card">
                        <div class="content-box third">
                          <span class="card-title"><span className='grey-text-title'>PLUS</span><br></br>790 Р</span>
                          <ul className="card-content">
                              <li>Все медитации каждой категории <br/> навсегда</li>
                              <li>тех.поддержка 24/7</li>
                              <li> Личный чат с создателями навсегда</li>
                              <li>Доступ к новым функция навсегда</li>
                          </ul>
                          {/* <span class="see-more">See More</span> */}
                        </div>
                        {/* <div class="date-box">
                          <span class="month">JUNE</span>
                          <span class="date">29</span>
                        </div> */}
                      </div>
                    </li>
                   <li>
                   <div class="card">
                        <div class="content-box fourth">
                          <span class="card-title"><span className='grey-text-title'>PLUS</span><br></br>590 Р</span>
                          <ul className="card-content">
                              <li>Все медитации каждой категории <br/> навсегда</li>
                              <li>тех.поддержка 24/7</li>
                              <li> Личный чат с создателями навсегда</li>
                              <li>Доступ к новым функция навсегда</li>
                          </ul>
                          {/* <span class="see-more">See More</span> */}
                        </div>
                        {/* <div class="date-box">
                          <span class="month">JUNE</span>
                          <span class="date">29</span>
                        </div> */}
                      </div>
                    </li>
                </ul>
                <a href="" className='button-tariphs-buy'>ВЫБРАТЬ ТАРИФ</a>
                <ul className="tariphs-grid">
                   <li>
                      {/* <div className='imges-pay'>
                            <img src={arrow_right} alt="" />
                            <img src={logo_ukassa} alt="" className='ukassa' />
                      </div>
                   <a href="">ОПЛАТИТЬ ЧЕРЕЗ ЮКАССУ</a> */}
                      <button class="button">
                        <span class="text">ОПЛАТИТЬ ЧЕРЕЗ ЮКАССУ</span>
                        <span class="icon"><img src={logo_ukassa} alt="" /></span>
                      </button>
                   </li>
                   <li>
                      <button class="button">
                        <span class="text">ОПЛАТИТЬ ЧЕРЕЗ ЮКАССУ</span>
                        <span class="icon"><img src={logo_ukassa} alt="" /></span>
                      </button>
                    </li>
                   <li>
                      <button class="button">
                        <span class="text">ОПЛАТИТЬ ЧЕРЕЗ ЮКАССУ</span>
                        <span class="icon"><img src={logo_ukassa} alt="" /></span>
                      </button>
                    </li>
                   <li>
                      <button class="button">
                        <span class="text">ОПЛАТИТЬ ЧЕРЕЗ ЮКАССУ</span>
                        <span class="icon"><img src={logo_ukassa} alt="" /></span>
                      </button>
                    </li>
                </ul>
            </div>
          </div>
      </div>
      <div className='tariphs-footer-section'>
              <Section9 />
      </div>
  </section>
  )
}

export default AdminTariphs;