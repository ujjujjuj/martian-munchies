import Link from 'next/link'
import styles from '../styles/nfts.module.css'
import { MenuItem } from './MenuItem'
export const Explore = ({ items }) => {
    return (
        <div className='px-32 mb-10'>
            <h1 className='font-extrabold text-4xl tracking-[0.1em] mt-10 font-[akira] text-right' >EXPLORE OUR <span className={styles.stroke}>MENU</span> :</h1>
            <div className='grid-cols-3 grid w-full gap-x-16 mt-4'>
                {

                    items.slice(0, 3).map((item, idx) => (
                        <MenuItem
                            key={idx}
                            name={item.name}
                            price={item.price}
                            src={item.image}
                            id={item.id}
                            desc={item.description}
                        />
                    ))

                }
            </div>
            <Link href={'/menu'}>
                <p className='text-center mt-8 text-sm tracking-widest cursor-pointer'>VIEW FULL MENU &nbsp;&nbsp; {'>'}</p>
            </Link>
        </div>
    )
}