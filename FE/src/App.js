import style from "./app.module.css";
import { Header } from "./blocks/header";
import { CompanyOld } from "./blocks/company-old/company-old";
import { Transportation } from "./blocks/transportation/transportation";
import { Footer } from "./blocks/footer";
import { Advantages } from "./blocks/advantages/advantages";
import { LandingBlock } from "./blocks/landing-block";
import { ScrollToTop } from "./components/scroll-to-top";
import { Test } from "./blocks/test/test";
import { ChinaPay } from "./blocks/china-pay/china-pay";
import { pageTransition, pageVariants } from "./utils/animation";
import { motion } from "framer-motion";
import { OfficeMap } from "./blocks/office-map";
import { LandingImgBlock } from "./blocks/landing-img-block";
import NumbersBlock from "./blocks/numbers-block/numbers-block";
import { DeliveryBlock } from "./blocks/delivery-block";
const App = () => {
  const isMobile = window.innerWidth < 480;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      <ScrollToTop />
      <div className={style.App}>
        <Header />
        {/*<LandingImgBlock />*/}
        <LandingBlock />
        <DeliveryBlock />
        <NumbersBlock />
        {/*<Test />*/}
        {/*<ChinaPay />*/}
        {/*<CompanyOld />*/}
        <Transportation />
        {/*<Calculation />*/}
        {/*<Footer />*/}
        {/*<Burger />*/}
        <OfficeMap />
        <Advantages />
      </div>
    </motion.div>
  );
};

export default App;
