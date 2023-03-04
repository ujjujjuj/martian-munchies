import styles from '../styles/Menu.module.css'
import { MenuItem } from './MenuItem';
export const Cuisine = () => {
    return (
        <>
            <section className=" px-24">
                <h1 className='font-[akira] text-4xl tracking-[0.1em] mb-8'> OUR <span className={styles.stroke}>ELUSIVE</span> CUISINE :</h1>
                <div className={styles.grid}>
                    <MenuItem name="ELON SHRIMPS" price="200" src="/assets/food.png" />
                    <MenuItem name="ELON SHRIMPS" price="200" src="/assets/food.png" />
                    <MenuItem name="ELON SHRIMPS" price="200" src="/assets/food.png" />
                    <MenuItem name="ELON SHRIMPS" price="200" src="/assets/food.png" />
                    <MenuItem name="ELON SHRIMPS" price="200" src="/assets/food.png" />
                    <MenuItem name="ELON SHRIMPS" price="200" src="/assets/food.png" />
                </div>
            </section>
        </>
    );
}; 