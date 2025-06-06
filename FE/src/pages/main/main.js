import style from "../../app.module.css";
import { Header } from "../../blocks/header";
import { LandingBlock } from "../../blocks/landing-block";
import { ScrollToTop } from "../../components/scroll-to-top";
import { pageTransition, pageVariants } from "../../utils/animation";
import { motion } from "framer-motion";
import { OfficeMap } from "../../blocks/office-map";
import { NumbersBlock } from "../../blocks/numbers-block";
import { AdvantagesBlock } from "../../blocks/advantages-block";
import { Partners } from "../../blocks/partners";
import { Transportation } from "../../blocks/transportation";
import { CertificateBlock } from "../../blocks/certificates-block/certificate";
import { VersionLogger } from "../../components/version-logger/version-logger";
import BusinessTourBlock from "../../blocks/business-tour/business-tour";

export const Main = () => {
  const isMobile = window.innerWidth < 480;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      <VersionLogger />
      <ScrollToTop />
      <div className={style.App}>
        <Header />
        <LandingBlock />
        <AdvantagesBlock />
        <NumbersBlock />
        <Transportation />
        <BusinessTourBlock />
        <CertificateBlock />
        <OfficeMap />
        <Partners />
      </div>
    </motion.div>
  );
};
