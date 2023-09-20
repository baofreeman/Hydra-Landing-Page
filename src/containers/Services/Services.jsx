import React from "react";
import classNames from "classnames/bind";
import styles from "./Services.module.scss";
import { GrFormNext, GrPrevious, GrNext } from "react-icons/gr";
import { Button } from "../../components";
import {
  vr1,
  vr2,
  vr3,
  vr4,
  vrBanner,
  vrPartner1,
  vrPartner2,
  vrPartner3,
  vrPartner4,
} from "../../assets";
import { BsChevronDown } from "react-icons/bs";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const cx = classNames.bind(styles);
const Services = () => {
  return (
    <div className={cx("services__wrapper")}>
      <div className={cx("services__intro")}>
        <div className={cx("services__intro-heading")}>
          <h1>WHY BUILD</h1>
          <div className={cx("services__intro-heading-des")}>
            <p>WHY HYDRA VR</p>
            <GrFormNext />
          </div>
        </div>
        <div className={cx("services__intro-des")}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            veritatis culpa dolor cum quos odio quis sunt nihil libero nemo
            dolorem aspernatur dignissimos eaque quaerat, in commodi iusto
            eveniet eos.
          </p>
        </div>
      </div>

      <div className={cx("services__items")}>
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <div className={cx("services__item")}>
              <div className={cx("services__item-img")}>
                <img src={vr1} />
              </div>
              <h1>SIMULATION</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis, quasi iste rem quos doloribus ipsam nesciunt in, eos
                similique expedita odio numquam tempore sit et fuga molestiae.
                Vero, sint quod.
              </p>
              <Button primary={true} medium={true}>
                Button
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cx("services__item")}>
              <div className={cx("services__item-img")}>
                <img src={vr2} />
              </div>
              <h1>EDUCATION</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis, quasi iste rem quos doloribus ipsam nesciunt in, eos
                similique expedita odio numquam tempore sit et fuga molestiae.
                Vero, sint quod.
              </p>
              <Button primary={true} medium={true}>
                Button
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cx("services__item")}>
              <div className={cx("services__item-img")}>
                <img src={vr3} />
              </div>
              <h1>SELF-CARE</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis, quasi iste rem quos doloribus ipsam nesciunt in, eos
                similique expedita odio numquam tempore sit et fuga molestiae.
                Vero, sint quod.
              </p>
              <Button primary={true} medium={true}>
                Button
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cx("services__item")}>
              <div className={cx("services__item-img")}>
                <img src={vr4} />
              </div>
              <h1>OUTDOOR</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis, quasi iste rem quos doloribus ipsam nesciunt in, eos
                similique expedita odio numquam tempore sit et fuga molestiae.
                Vero, sint quod.
              </p>
              <Button primary={true} medium={true}>
                Button
              </Button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={cx("services__partner")}>
        <div className={cx("services__partner-img")}>
          <div className={cx("services__partner-header")}>
            <h1>TECHNOLOGIES & HAERDWAVE</h1>
            <p>USED BY HYDRA VR</p>
          </div>
          <div className={cx("services__partner-btn")}>
            <Button primary={true} small={true}>
              <BsChevronDown />
            </Button>
          </div>
        </div>

        <div className={cx("services__partner-items")}>
          <Swiper
            // install Swiper modules
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <div className={cx("services__partner-item")}>
                <img src={vrPartner1} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("services__partner-item")}>
                <img src={vrPartner2} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("services__partner-item")}>
                <img src={vrPartner3} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("services__partner-item")}>
                <img src={vrPartner4} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Services;
