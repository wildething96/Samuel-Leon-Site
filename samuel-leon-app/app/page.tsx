import BurgerButton from "./components/burger-btn";
import LandingVideo from "./components/landing-video";
import Item from "./components/item";
import Footer from "./components/footer";
import { Items } from "./utils/items";
import Image from '../public/img/Image.png';
import './globals.css';

export default function Home() {
  return (
    <main className="min-w-80 flex min-h-screen flex-col items-center justify-between px-0">
      <LandingVideo />
      <BurgerButton />
      <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"></link>
        <div className="ten">
          <h1 className="fade-text">Samuel Leon</h1>
        </div>
        {Items.map((item, index) => (
            <Item key={index} title={item.title} description={item.description} image={Image} />
        ))}
            <Footer />
    </main>
  );
}
