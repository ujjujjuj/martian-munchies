import styles from '../styles/profile.module.css';
import { CartItem } from './CartItem';
export const Orders = () => {
    return (
        <div className='w-full'>
            <h1 className='font-extrabold text-4xl tracking-[0.1em] mt-10' >YOUR <span className={styles.stroke}>ORDERS</span></h1>
            <div className='grid-cols-2 grid w-full gap-x-10 gap-y-4 mt-3'>

            </div>
        </div>
    );
}