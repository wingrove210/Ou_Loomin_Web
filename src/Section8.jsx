import './css/Section8.css';
import plusImage from './media/Union.png';
import { Accordion } from './Accordion/Accordion';

const faqList = [
    {
        q: "Что такое медитация?",
        a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima unde eaque iste earum! Nam corrupti magni natus facere repellendus."
    },
    {
        q: "Какие преимущества медитации?",
        a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima unde eaque iste earum! Nam corrupti magni natus facere repellendus."
    },
    {
        q: "Сколько времени рекомендуется уделять медитации для новичков?",
        a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima unde eaque iste earum! Nam corrupti magni natus facere repellendus."
    },
    {
        q: "Нужно ли иметь специальное оборудование или одежду для медитации?",
        a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima unde eaque iste earum! Nam corrupti magni natus facere repellendus."
    },
    {
        q: "Какие существуют техники медитации?",
        a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima unde eaque iste earum! Nam corrupti magni natus facere repellendus."
    },
]
function Section8(){
    return(
        <section className="accordion">
            <Accordion faqList = {faqList} />
        </section>
    );
}

export default Section8;