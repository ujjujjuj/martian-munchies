import Image from 'next/image';
import styles from '../styles/profile.module.css';
export const NFTCollection = () => {
    return (
        <div className='w-full mt-6 mb-10'>
            <h1 className='font-extrabold text-4xl tracking-[0.1em] mt-7' ><span className={styles.stroke}>NFT</span> COLLECTION</h1>
            <div className='grid-cols-3 grid w-full gap-x-10 gap-y-4 mt-10'>
                <Image src="/assets/nft-1.png" className='w-full h-auto ' width={300} height={300} />
                <Image src="/assets/nft-2.png" className='w-full h-auto ' width={300} height={300} />
            </div>
        </div>
    );
}