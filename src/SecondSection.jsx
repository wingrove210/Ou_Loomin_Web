import './css/SecondSection.css'
import scalePhone from './media/scale_phone.png'
import lines from './media/Lines.png'
import gulls from './media/Gulls.svg'
import iphone from './media/iphone.png'
import phone_girl from './media/Rectangle 142.png'
import Aliana from './media/aliana.png'
import iphone14pro from './media/iPhone14Pro(1).png'
import ion_girl from './media/Rectangle143.png'
import calendar from './media/calendar.png'
import calendar2 from './media/calendar2.png'
import activity from './media/activity.png'
import astrologist from './media/Rectangle28(2).png'
import gimnastic_girl from './media/Rectangle26.png'
import meditation from './media/Rectangle28(3).png'
import button_next from './media/Button-Next.png'
import button_prev from './media/Button-Prev.png'
import arrow_forward from './media/arrow_forward.png'
import section5_phone from './media/iPhone14Pro.png'
import android from './media/Android.png'
import apple from './media/Apple.svg'
import qrcode from './media/grcode.svg'
import icon_message from './media/Icon.png'
import plus_sign from './media/Union.png'
import triangle_play from './media/Polygon.svg'
import Aliana_section3 from './media/Frame260.png'
import stars from './media/union.svg'

function SecondSection(){
    return (
        <section className="second-section">
            <h3 className="logo">OU LOOMIN</h3>
            <div className="text-block">
                <p class="indulve">Погрузись в момент с нами </p>
                <h1 class="big-phone-header">Открой мир внутри себя</h1>
                <p class="big-phone-content">Неважно, новичок вы или опытный медитатор – наше приложение предлагает ряд упражнений, подходящих для каждого. От коротких медитаций на 5 минут до глубоких погружений на час – найдите то, что откликается в вашем сердце.</p>
            </div>
            
            <img src={phone_girl} alt="" className="second-section-image" />
        </section>
    );
}
window.addEventListener("DOMContentLoaded", () => {
    //  здесь будет js контент
})

export default SecondSection;