import React from "react";
import css from "./testimonials.module.css";
import testi from "../../assets/mainhero.png";
import { TestimonialsData } from "../../data/TestimonialsAPI";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Testimoni = () => {
  return (
    <div className={css.testi}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
            You are the light of the world. Shine, and darkness will disappear.
          </span>
        </div>

        <img src={testi} alt="" />
        <div className={css.container}>
          <span>100K</span>
          <span>Happy Customers with us</span>
        </div>
      </div>

      <div className={css.review}>Reviews</div>

      <div className={css.carousel}>
        <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={20}
        className={css.Tcarousel}
        >
          {TestimonialsData.map((rev, i) => (
            <SwiperSlide>
              <div className={css.testimoni}>
                <img src={rev.image} alt="" />
                <span>{rev.comment}</span>
                <hr />
                <span>{rev.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimoni;
