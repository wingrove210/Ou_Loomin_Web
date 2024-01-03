import './css/Section5.css';
import phone5sec from './media/iPhone14Pro.png';
import phone5sec_2 from './media/iPhone 14 Pro (3).png';
import phone5sec_3 from './media/iPhone 14 Pro (4).png';
import phone5sec_4 from './media/iPhone 14 Pro (5).png';
import triangle_play from './media/Polygon.svg';
import { useEffect } from "react";
import $ from "jquery"

    let image_src = [phone5sec]
    let wiheader = ['НАЙДИ ВНУТРЕННИЙ ПОКОЙ ЧЕРЕЗ ОСОЗНАННОСТЬ']
    let wicontent = ['Наше приложение – идеальный спутник для тех, кто стремиться к внутреннему спокойствию и гармонии. Благодаря каждой созданной для вас медитации, вы научитесь проявляться ярко и открыто, разрешая себе быть настоящим. Убрав энергетические блоки, вы поймете, как реализовать свой внутренний потенциал. ']
function Section5(){
   
        
  useEffect(() => {

    window.addEventListener("scroll",function(e) {

      let scrollY = document.documentElement.scrollTop

      console.log(scrollY)
      let img_source_1 = [phone5sec]
      let img_source_2 = [phone5sec_2]
      let img_source_3 = [phone5sec_3]
      let img_source_4 = [phone5sec_4]
      if(scrollY >= 4200 && scrollY <= 4500){
        console.log("paymal")
        wiheader = ["НАЙДИ ВНУТРЕННИЙ ПОКОЙ ЧЕРЕЗ ОСОЗНАННОСТЬ"]
        wicontent = ["Наше приложение – идеальный спутник для тех, кто стремиться к внутреннему спокойствию и гармонии. Благодаря каждой созданной для вас медитации, вы научитесь проявляться ярко и открыто, разрешая себе быть настоящим. Убрав энергетические блоки, вы поймете, как реализовать свой внутренний потенциал. "]
        // image_src = [phone5sec_2]
        $('.world-inside-header').text(wiheader)
        $('.world-inside-content').text(wicontent)
        $('.world-inside-phone-img').attr('src', img_source_1)
        // $('.world-inside-phone-img').css("width", "550px")
        $('.world-inside-phone-img').fadeIn("slow")
      }
      if(scrollY >= 4500 && scrollY <= 4800){
        console.log("Yo")
        wiheader = ["МЕДИТИРУЙ ЧТОБЫ ОБРЕСТИ ГАРМОНИЮ "]
        wicontent = ["Мы предлагаем вам разнообразные медитативные практики, с помощью которых вы сможете выйти за пределы своих мыслей и ощущений. Вы научитесь отпускать контроль, прислушиваться к своему внутреннему миру и обретать гармонию даже в самых сложных ситуациях."]
        // image_src = [phone5sec_3]
        $('.world-inside-header').text(wiheader)
        $('.world-inside-content').text(wicontent)
        $('.world-inside-phone-img').attr('src', img_source_2)
        // $('.world-inside-phone-img').fadeOut("slow")
        // $('.world-inside-phone-img').css("width", "500px")
        $('.world-inside-phone-img').fadeIn("slow")

      }
      if(scrollY >= 4800 && scrollY <= 5100){
        console.log("Yo")
        wiheader = ["МЕДИТАЦИЯ – ПУТЬ К ЯСНОСТИ "]
        wicontent = ["Главный шаг к тому, о чем вы мечтаете, это внутреннее состояние. С помощью наших практик вы научитесь создавать просветы в своем сознании от навязчивых и негативных мыслей, вместо этого наполняться спокойствием и уверенностью. Создадите свою идеальную реальность и поймете, что все, о чем вы мечтаете, уже рядом."]
        // image_src = [phone5sec_4]
        $('.world-inside-header').text(wiheader)
        $('.world-inside-content').text(wicontent)
        $('.world-inside-phone-img').attr('src', img_source_3)
        // $('.world-inside-phone-img').css("width", "380px")
        $('.world-inside-phone-img').fadeIn("slow")
      }
      if(scrollY >= 5100 && scrollY <= 5400){
        console.log("paymal")
        wiheader = ["МИР ВНУТРИ ТЕБЯ – ВСЕГО В ОДНОМ КЛИКЕ"]
        wicontent = ["Оказавшись однажды в  тишине от  своих мыслей, жизнь изменится навсегда. С помощью нашего приложения и его мощных медитативных практик, мы наполним твое сердце любовью, повысим уровень вибраций и наполним душу светом и чистой энергией."]
        // image_src = [phone5sec]
        $('.world-inside-header').text(wiheader)
        $('.world-inside-content').text(wicontent)
        $('.world-inside-phone-img').attr('src', img_source_4)
        $('.world-inside-phone-img').fadeIn("slow")
        // $('.world-inside-phone-img').css("width", "500px")
      }
  }
  )
}
)
    return(
      <section className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden justify-start">
        <div className="group relative h-[450px] w-[450px] overflow-hidden">
    <div className='world-inside'>
        <div className="world-inside-block">
            <div className='world-phone-section'>
                <img src={image_src} alt="" className="world-inside-phone-img"/>
            </div>
            <div className='world-inside-section'>
                <div className="world-inside-text">
                    <h1 className="world-inside-header">{wicontent}</h1>
                    <p className="world-inside-content">{wiheader}</p>
                </div>
                <div className="buttons-low-2">
                        <a href='#' className="try-btn-horiz">Попробовать бесплатно</a>
                        <a href="#" className="watch-video-horiz"><img alt="" src={triangle_play} className="polygon"/><span>Смотреть видео</span></a>
                </div>
            </div>
            <p className="world-inside-content-2">Наше приложение – это идеальный спутник для тех, кто стремится к внутреннему спокойствию и балансу. С помощью простых, но эффективных медитаций, вы научитесь находить умиротворение в любой ситуации </p>
        </div>
    </div>
  </div>
      </div>
    </section>
    );
}
export default Section5;