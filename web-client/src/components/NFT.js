import Image from "next/image"
import styles from "../styles/nfts.module.css"

export const NFT = () => {
    return (
        <div className={styles.nft}>
            <div className={styles.overlay}>ORDER NOW</div>
            <Image src="/assets/pizza.png" alt="nft1" width={350} height={800} />
        </div>
    )
}