import styles from "../styles/nfts.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Image from "next/image";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

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
                    effect={"coverflow"}
                    grabCursor={true}
                    className={styles.swiper}
                    slidesPerView={3}
                    pagination={pagination}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={170}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}

                >
                    <SwiperSlide>
                        <div className={styles.overlay}>ORDER NOW</div>
                        <Image src="/assets/pizza.png" alt="nft1" width={350} height={800} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.overlay}>ORDER NOW</div>

                        <Image src="/assets/pizza.png" alt="nft1" width={350} height={800} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.overlay}>ORDER NOW</div>

                        <Image src="/assets/pizza.png" alt="nft1" width={350} height={800} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.overlay}>ORDER NOW</div>

                        <Image src="/assets/pizza.png" alt="nft1" width={350} height={800} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.overlay}>ORDER NOW</div>

                        <Image src="/assets/pizza.png" alt="nft1" width={350} height={800} />
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    )
}