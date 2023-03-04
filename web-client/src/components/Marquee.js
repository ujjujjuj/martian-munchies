import Image from "next/image"
import styles from "../styles/Marquee.module.css"

export const Mrq = () => {
    return (
        <section className={styles.marquee_main}>
            <div className={styles.marquee_wrap}>
                <div className={styles.marquee}>
                    <div className={styles.marquee_group}>
                        <Image src="/assets/marq.svg" width={1000} height={500} alt="logo" />
                        <Image src="/assets/marq.svg" width={1000} height={500} alt="logo" />
                    </div>
                    <div className={styles.marquee_group} aria-hidden="true">
                        <Image src="/assets/marq.svg" width={1000} height={500} alt="logo" />
                        <Image src="/assets/marq.svg" width={1000} height={500} alt="logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}