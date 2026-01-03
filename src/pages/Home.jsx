import "./Home.css"
import FlowerVideo from "../assets/HomePage/videos/Flower.mp4"
import LoveStory from "../assets/HomePage/videos/Love Story.mp4"
import Frieren from "../assets/HomePage/videos/Frieren.mp4"
import Horimiya from "../assets/HomePage/videos/Horimiya.mp4"
import MagicBattle from "../assets/HomePage/videos/Magic Battle.mp4"
import SoloLeveling from "../assets/HomePage/videos/Solo Leveling.mp4"
import YourName from "../assets/HomePage/videos/Your Name.mp4"
import image2 from "../assets/HomePage/images/image2.jpg"
import image3 from "../assets/HomePage/images/image3.jpeg"
import image4 from "../assets/HomePage/images/image4.jpg"
import videoSection3 from "../assets/HomePage/videos/videoSection3.mp4"
import Footer from "../components/Footer"
import { useContext } from "react"
import { languageContext } from "../contexts/LanguageContext"

function Home() {
    const { language } = useContext(languageContext);

    return (
        <div className="home-app">
            <section className="home-section-one">
                <h1 className="home-section-one-h1">{language === "ru" ? "Что такое аниме?" : "What is anime?"}</h1>
                <p className="home-section-one-p">{language === "ru" ? "Аниме — это стиль анимации, зародившийся в Японии и ставший глобальным феноменом. Хотя термин буквально означает «анимация» по-японски, за пределами Японии он относится именно к анимации, произведённой в Японии, или к её характерному стилю и повествованию. Это разнообразная среда, охватывающая бесчисленные жанры и создаваемая для аудитории всех возрастов." : 'Anime is a style of animation that originated in Japan and has become a global phenomenon. Although the term literally means «animation» in Japanese, outside of Japan it refers specifically to animation produced in Japan or its distinctive style and narrative. It is a diverse environment spanning countless genres and created for an audience of all ages.'}</p>
            </section>
            <div className="home-section-sepparation1"><span className="home-section-sepparation1-text">{language === "ru" ? 'Список популярных жанров' : 'List of popular genres' }</span></div>
            <section className="home-section-two">
                <div className="home-section-two-cards-wrapper">
                    <div className="home-section-two-card-wrapper">
                        <img id="home-image2" className="home-section-two-image" src={image2} alt="Magic battle image" />
                        <span className="home-section-two-image-figcaption">{language === "ru" ? 'Экшн' : 'Action'}</span>
                    </div>
                    <div className="home-section-two-card-wrapper">
                        <img className="home-section-two-image" src={image3} alt="Sword art online image" />
                        <span className="home-section-two-image-figcaption">{language === "ru" ? 'Фэнтези' : 'Fantasy'}</span>
                    </div>
                    <div className="home-section-two-card-wrapper">
                        <img className="home-section-two-image" src={image4} alt="Your name image" />
                        <span className="home-section-two-image-figcaption">{language === "ru" ? 'Романтика' : 'Romance'}</span>
                    </div>
                </div>
                <a target="_blank" href="https://shikimori.one/animes/kind/tv" className="home-section-two-link" >{language === "ru" ? 'сайт для просмотра аниме' : 'anime viewing website'}</a>
            </section>
            <div className="home-section-sepparation2"></div>
            <section className="home-section-three">
                <div className="home-section-three-text-wrapper">
                    <h1 className="home-section-three-h1">{language === "ru" ? 'Для абсолютных новичков:' : 'For absolute beginners:'}</h1>
                    <ul className="home-section-three-ul">
                        <li>{language === "ru" ? 'Моя геройская академия: Современная история о супергероях, в которую легко вникнуть.' : "My Hero Academy: A modern superhero story that's easy to delve into."}</li>
                        <li>{language === "ru" ? 'Тетрадь смерти: Захватывающая психологическая игра в кошки-мышки.' : 'Death Note: An exciting psychological cat-and-mouse game.'}</li>
                        <li>{language === "ru" ? 'Атака титанов: Тёмное, эпичное фэнтези с невероятной загадкой экшеном.' : 'Attack of the Titans: Dark, epic fantasy with incredible mystery and action.'}</li>
                    </ul>
                </div>
                <video className="home-video-section-three" src={videoSection3} autoPlay muted loop />
            </section>
            <div className="home-section-sepparation2"></div>
            <section className="home-section-four">
                <div className="home-section-four-lines"></div>
                <div className="home-section-four-content-wrapper">
                    <video className="home-section-four-video home-section-four-Flover" src={FlowerVideo} autoPlay muted loop />
                    <video className="home-section-four-video home-section-four-Frieren" src={Frieren} autoPlay muted loop />
                    <video className="home-section-four-video home-section-four-Horimiya" src={Horimiya} autoPlay muted loop />
                    <video className="home-section-four-video home-section-four-LoveStory" src={LoveStory} autoPlay muted loop />
                    <video className="home-section-four-video home-section-four-MagicBattle" src={MagicBattle} autoPlay muted loop />
                    <video className="home-section-four-video home-section-four-SoloLeveling" src={SoloLeveling} autoPlay muted loop />
                    <video className="home-section-four-video home-section-four-YourName" src={YourName} autoPlay muted loop />
                    <div className="home-section-four-quote">
                        <blockquote>{language === "ru" ? '«Когда вы достигаете точки невозврата, именно тогда это действительно становится путешествием»' : "«When you reach the point of no return, that's when it really becomes a journey.»"}</blockquote>
                        <span>{language === "ru" ? 'Хината Мияке, «Место дальше, чем Вселенная».' : 'Hinata Miyake, «A place further than the Universe.»'}</span>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home