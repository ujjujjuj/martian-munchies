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
                    slidesPerView={3}
                    pagination={pagination}
                    centeredSlides={true}
                    loop={true}
                    draggable={false}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={80}
                    modules={[Pagination, Autoplay]}
                >
                    <SwiperSlide>
                        <NFT />
                    </SwiperSlide>
                    <SwiperSlide>
                        <NFT />
                    </SwiperSlide>
                    <SwiperSlide>
                        <NFT />
                    </SwiperSlide>
                    <SwiperSlide>
                        <NFT />
                    </SwiperSlide>
                    <SwiperSlide>
                        <NFT />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}