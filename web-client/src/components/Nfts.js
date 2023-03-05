import styles from "../styles/nfts.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Image from "next/image";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { NFT } from "./NFT";

export const Nfts = () => {

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
                    <SwiperSlide>
                        <NFT src="/assets/nft-1.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <NFT src="/assets/nft-2.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <NFT src="/assets/nft-3.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <NFT src="/assets/nft-1.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <NFT src="/assets/nft-2.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <NFT src="/assets/nft-3.png" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}