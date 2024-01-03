import './css/SecondSection.css'
import phone_girl from './media/Vmake-1702165167.png'
import $ from 'jquery'

function SecondSection(){
    // $(function() {
    //     $(window).on("scroll",function() {
    //         let element = $(".text-block");
    //      var scrollTop = document.querySelector('html').scrollTop;
    //      if (scrollTop > 200){
    //          $(window).on("scroll", function(e) {
    //              let scrollY = e.currentTarget.scrollY
 
    //              if(scrollY >= 1280){
    //                  $(element).css("position", "fixed")
    //              }
    //             //  else{
    //             //     $(element).css("display", "none")
    //             //  }
    //          });
    //      }
    //    });
    //   });
    return (
        <section className="second-section">
            <h3 className="logo-2">OU LOOMIN</h3>
            <div className="text-block">
                <p className="indulve"><span className="round" />Погрузись в момент с нами </p>
                <h1 className="big-phone-header">Открой мир внутри себя</h1>
                <p className="big-phone-content">Неважно, новичок вы или опытный медитатор – наше приложение предлагает ряд упражнений, подходящих для каждого. От коротких медитаций на 5 минут до глубоких погружений на час, найдите то, что откликается в вашем сердце.</p>
            </div>
            
            <img src={phone_girl} alt="" className="second-section-image" />
        </section>
    );
}
window.addEventListener("DOMContentLoaded", () => {
    //  здесь будет js контент
})

export default SecondSection;