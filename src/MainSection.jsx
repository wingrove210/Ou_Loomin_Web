import './App.css';
import './index.css';
import './media.css'
import scalePhone from './media/scale_phone.png'
import lines from './media/Lines.png'
import gulls from './media/Галочки.png'
import qrcode from './media/grcode.svg'
import triangle_play from './media/Polygon.svg'
import stars from './media/Union.svg';
import Header from './Header';
import { useEffect} from "react";
function MainSection() {
    // useEffect(()=>{
    //     gsap.to( ".scale-phone", {
    //         duration: 3,
    //         scale: 6,
    //         scrollTrigger: {
    //             trigger: ".scale-phone",
    //             start: "top 40%",
    //             end: "top 30%",
    //         scrub: true,
    //             toggleClass: ".scale-phone",
    //             markers: {
    //                 startColor: "red",
    //                 endColor: "red"
    //             }
    //         }
    //     })
    // })
    // $(function() {
    //     var el = $(".scale-phone")
    //     var section = $(".upper-section")
    //     $(window).on("scroll",function() {
    //         var scrollTop = document.querySelector('html').scrollTop;
    //         if (scrollTop > 200){
    //         $(window).on("scroll", function(e) {
    //             let scrollY = e.currentTarget.scrollY

    //             if(scrollY >= 2300){
    //                 $(el).hide()
    //                 $(section).hide()
    //             }
    //             else{
    //                     $(el).show()
    //                     $(section).show()

    //             }
    //         })
    //         }
    //     })
    // })

    // $(function() {

    //    var el = $(".scale-phone"), from = el.width(), height = 500;
    //    var section = $(".upper-section")
    //    var text_block = $(".main-text");
    //    var lines = $(".img-lines-block");
    //    $(window).on("scroll",function() {
    //     var scrollTop = document.querySelector('html').scrollTop;
    //     if (scrollTop > 200){
    //         $(window).on("scroll", function(e) {
    //             let scrollY = e.currentTarget.scrollY
    //             if(scrollY >= 780 && scrollY <= 2300){
    //                 $(el).css("position", "fixed")
    //                 $(el).css("top", "-400px")
    //                 $(section).css("height", "100vh")
    //             }
    //             // if(scrollY >=2300){
    //             //     $(el).hide()
    //             //     $(section).hide()
    //             // } 
    //             else {
    //                 // $(el).show()
    //                 // $(section).show()
    //                 $(el).css("position", "relative")
    //                 $(el).css("top", "0px")
    //             }
    //             let skot = 0
    //             var width_1 = ((scrollTop - 100) * 0.01) + 1;
    //             if(width_1 >= 6){
    //                 $(el).css('transform', `${skot}`)
    //             }
    //             else{
    //                 skot = width_1
    //                 $(el).css('transform', `scale(${width_1})`)
    //             }
    //         });
    //         $(lines).css("display", "none")
    //         $(text_block).css("display", "none")
    //     }
    //     else {
    //             $(window).on("scroll", function() {
    //             var width_1 = scrollTop * 0.01;
    //             $(el).css('transform', 'scale(1)')
    //         });
    //         $(lines).css("display", "block")
    //         $(text_block).css("display", "block")
    //         $(text_block).css("position", "fixed")
    //         $(text_block).css("top", "300px")
    //     }
    //   });
    //  });

    return (
            <section className="upper-section" id='main'>
                <Header />
                <div className="main-text">
                    <div className="main-text__block">
                        <p className="over-header"><img alt="" src={stars} className="start" />Добро пожаловать в <span>ou loomin</span></p>
                        <h1 className="header-text">В гармонии с собой – в <br /> гармонии с миром.</h1>
                        <p className="under-header">Наше приложение – это идеальный спутник для тех,
                            кто стремится к<br /> внутреннему спокойствию и балансу.
                            С помощью простых, но<br /> эффективных медитаций, вы научитесь находить умиротворение в<br /> любой ситуации</p>
                        <div className="buttons-low-1">
                            <a href='/register' className="try-btn-main">Попробовать бесплатно</a>
                            <a className="watch-video-main"><img alt="" src={triangle_play} className="polygon" /><span>Смотреть видео</span></a>
                        </div>
                    </div>
                </div>
                <div className="gulls">
                    <img src={gulls} alt="" className="gulls-img" />
                </div>
                <div className="img-lines-block">
                    <div className='img-lines-section'>
                        <img alt="" src={lines} className="lines-img" />
                    </div>
                    <p className="wave-text">СПУСКАЙСЯ НИЖЕ</p>
                    <div className="qr-code">
                        <div className='qr-code-block'>
                            <div className="qr-code-text">
                                <h1 className="qrcode-header">Попробуй приложения прямо сейчас</h1>
                                <p className="qr-code-content">СКАЧАТЬ ПРИЛОЖЕНИЕ</p>
                            </div>
                            <img src={qrcode} alt="" className="qr-code-img" />
                        </div>
                    </div>
                </div>
                <div className="scale-phone-block">
                        <img src={scalePhone} alt="" className="scale-phone" />
                </div>

            </section>
        
    )
}

export default MainSection;