import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import '@/styles/global.css'

import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
    const router = useRouter()
    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div key={router.route} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    )
}
