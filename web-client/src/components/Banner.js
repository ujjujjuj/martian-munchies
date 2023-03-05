import styles from '../styles/Menu.module.css'
import { MenuItem } from './MenuItem'
export const Banner = () => {
    return (
        <>
            <section className={`flex flex-col justify-center items-center  mt-24 text-white bg-black ${styles.banner} mx-16 py-16`}>
                <div className="w-[55%] text-center">
                    <h1 className="text-4xl font-[akira] tracking-[0.1em]">INDULGE IN THE EXPERTLY SELECTED RANGE OF OUR CULINARY DELIGHTS</h1>
                    <p className="text-md tracking-[0.38em] mt-3 leading-5">Meticulously crafted to offer you a gastronomic experience like no other</p>
                </div>
            </section>
        </>
    )
}