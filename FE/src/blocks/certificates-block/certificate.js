import React from "react";
import styles from "./certificate.module.css";

import ScrollAnimation from 'react-animate-on-scroll'

export const CertificateBlock = () => {
    return (
        <section className={styles.certificateSection}>
            <ScrollAnimation
                animateIn={`animate__fadeInLeft`}
                animateOnce={true}>
            <div className={styles.divider}></div>
            <h2 className={styles.sectionTitle}>
                Мы — участники <span className={styles.highlight}>TransRussia 2025</span>
            </h2>
            <p className={styles.sectionText}>
                Компания <span className={styles.highlight}>Тайм Транзит</span> приняла участие
                в 29-й международной выставке{" "}
                <span className={styles.highlight}>TransRussia | SkladTech</span> и была
                отмечена за <span className={styles.highlight}>высокий профессионализм</span> и{" "}
                <span className={styles.highlight}>актуальность</span> представленных решений.
            </p>
            </ScrollAnimation>
            <ScrollAnimation
                animateIn={`animate__fadeInRight`}
                animateOnce={true}>
                <img
                    src="/images/certificate-transrussia.png"
                    alt="Сертификат участия в выставке TransRussia"
                    className={styles.certificateImage}
                />
            </ScrollAnimation>
        </section>
    );
};
