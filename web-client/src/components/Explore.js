import Link from 'next/link'
import styles from '../styles/nfts.module.css'
import { MenuItem } from './MenuItem'
export const Explore = () => {
    return (
        <div className='px-32 mb-10'>
            <h1 className='font-extrabold text-4xl tracking-[0.1em] mt-10 font-[akira] text-right' >EXPLORE OUR <span className={styles.stroke}>MENU :</span></h1>
            <div className='grid-cols-3 grid w-full gap-x-16 mt-4'>
                <MenuItem name="ELON SHRIMPS" price="200" src="/assets/food.png" />
                <MenuItem name="ELON SHRIMPS" price="200" src="/assets/food.png" />
                <MenuItem name="ELON SHRIMPS" price="200" src="/assets/food.png" />
            </div>
            <Link href={'/menu'}>
                <p className='text-center mt-8 text-sm tracking-widest cursor-pointer'>VIEW FULL MENU &nbsp;&nbsp; {'>'}</p>
            </Link>
        </div>
    )
}