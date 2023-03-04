import Image from "next/image"
import styles from "../styles/Hero.module.css"
export const Hero = () => {
    return (
        <>
            <div className={`flex flex-col justify-center items-center w-full h-[100vh] text-white ${styles.hero}`}>

                <Image src="/assets/mars-img.png" width={800} height={800} />
                <h1>MARTIAN<br />MUNCHIES</h1>
                <p>EPITOME OF EXQUISITE CUISINE</p>

                <div className={styles.scroll}>
                    Scroll Down
                    <Image src="/assets/scroll-down.svg" width={15} height={15} />
                </div>
            </div>
        </>
    )
}