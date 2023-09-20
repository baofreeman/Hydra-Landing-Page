import React from "react";
import classNames from "classnames/bind";
import { GrFormNext, GrLinkNext } from "react-icons/gr";
import styles from "./Howto.module.scss";
import { SwiperCustom } from "../../components";
import { SwiperSlide } from "swiper/react";

const cx = classNames.bind(styles);

function Howto() {
  return (
    <div className={cx("howto__wrapper")} id="howto">
      <div className={cx("howto__intro")}>
        <div className={cx("howto__intro-heading")}>
          <h1>HOW WE BUILD</h1>
          <div className={cx("howto__intro-heading-des")}>
            <p>WITH HYDRA VR?</p>
            <GrFormNext />
          </div>
        </div>
        <div className={cx("howto__intro-des")}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            veritatis culpa dolor cum quos odio quis sunt nihil libero nemo
            dolorem aspernatur dignissimos eaque quaerat, in commodi iusto
            eveniet eos.
          </p>
        </div>
      </div>

      <div className={cx("howto__items")}>
        <SwiperCustom>
          <SwiperSlide>
            <div className={cx("howto__item")}>
              <div className={cx("howto__rounded")}>
                <h1>01</h1>
              </div>
              <div className={cx("howto__content")}>
                <GrLinkNext />
                <h1>3D Conception & Design</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cx("howto__item")}>
              <div className={cx("howto__rounded")}>
                <h1>02</h1>
              </div>
              <div className={cx("howto__content")}>
                <GrLinkNext />
                <h1>Interaction Design</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cx("howto__item")}>
              <div className={cx("howto__rounded")}>
                <h1>03</h1>
              </div>
              <div className={cx("howto__content")}>
                <GrLinkNext />
                <h1>VR World User Testing</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cx("howto__item")}>
              <div className={cx("howto__rounded")}>
                <h1>04</h1>
              </div>
              <div className={cx("howto__content")}>
                <GrLinkNext />
                <h1>Hydra VR Deploy</h1>
              </div>
            </div>
          </SwiperSlide>
        </SwiperCustom>
      </div>
    </div>
  );
}

export default Howto;
