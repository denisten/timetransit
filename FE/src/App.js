import style from "./app.module.css";
import { Header } from "./blocks/header";
import { Company } from "./blocks/company/company";
import { Transportation } from "./blocks/transportation/transportation";
import { Calculation } from "./blocks/calculation/calculation";
import { Footer } from "./blocks/footer";
// import { Footer } from "./components/footer/footer";
import { Advantages } from "./blocks/advantages/advantages";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { LandingBlock } from "./blocks/landing-block";
import { Burger } from "./blocks/burger/burger";
import { ScrollToTop } from "./components/scroll-to-top";

// import {Transportation} from "./components/transportation/transportation";
const App = () => {
  const isMobile = window.innerWidth < 480;

  return (
    <div>
      <ScrollToTop />
      <div className={style.App}>
        <Header />
        <LandingBlock />
        <Company />
        <Transportation />
        {/*<Calculation />*/}
        <Footer />
        {/*<Burger />*/}
        <Advantages />
      </div>
    </div>
  );
};

export default App;
