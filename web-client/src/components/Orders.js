import { CartContext } from '@/context/cartContext';
import { useContext } from 'react';
import styles from '../styles/profile.module.css';
import { CartItem } from './CartItem';

export const Orders = ({ orders }) => {

    const { cart } = useContext(CartContext)


    return (
        <div className='w-full'>
            <h1 className='font-extrabold text-4xl tracking-[0.1em] mt-10' >YOUR <span className={styles.stroke}>ORDERS</span></h1>
            <div className='grid-cols-2 grid w-full gap-x-10 gap-y-4 mt-3'>
                {
                    Object.entries(cart).map(([productId, product], i) => {
                        return <CartItem key={i} index={i} sm={true} item={product} />
                    })
                }
                {
                    Object.entries(cart).length === 0 && <p className='text-left mt-8 text-lg tracking-widest cursor-pointer'>No orders yet</p>
                }
            </div>
        </div>
    );
}