import { pageTransition, pageVariants } from "@/utils/animation";
import { motion } from "framer-motion";
import { OfficeMap, Partners, Transportation, Header, NumbersBlock, AdvantagesBlock, LandingBlock, CertificateBlock } from "@/blocks";
import {VersionLogger} from "@/components/version-logger/version-logger";
import {MetaTags} from "@/components";

export default function Main() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
        >
            <MetaTags
                title="О компании | TimeTransit"
                description="Мы доставляем грузы из Китая в Россию быстро и надёжно."
            />
            <VersionLogger />
            <div className="App">
                <Header />
                <LandingBlock />
                <AdvantagesBlock />
                <NumbersBlock />
                <Transportation />
                <CertificateBlock/>
                <OfficeMap />
                <Partners />
            </div>
        </motion.div>
    );
};
