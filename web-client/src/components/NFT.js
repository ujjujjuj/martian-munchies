import Image from "next/image"
import styles from "../styles/nfts.module.css"

export const NFT = ({ src }) => {
    return (
        <div className={styles.nft}>
            <div className={styles.overlay}>ORDER NOW</div>
            <Image src={src} alt="nft1" width={350} height={200} />
        </div>
    )
}