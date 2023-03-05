import styles from "../styles/nfts.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { NFT } from "./NFT";

export const Nfts = ({ nfts }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    };

    return (
        <>
            <div className={styles.section}>
                <h1>
                    LIMITED EDITION <span>NFTS</span> :
                </h1>
                <Swiper
                    className={styles.swiper}
                    pagination={pagination}
                    loop={true}
                    draggable={false}
                    spaceBetween={80}
                    slidesPerView={3}
                    centeredSlides={true}
                    modules={[Pagination]}
                >
                    {nfts.map((nft, idx) => (
                        <SwiperSlide key={idx}>
                            <NFT src={nft.image} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}
