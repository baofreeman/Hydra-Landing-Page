import React from "react";
import classNames from "classnames/bind";
import { Button } from "../../components";
import { GrLinkNext } from "react-icons/gr";
import { BiPhoneCall, BiMap, BiMailSend } from "react-icons/bi";
import { About, Howto, Services } from "../index";
import styles from "./Home.module.scss";
import { vg } from "../../assets";

const cx = classNames.bind(styles);
const Home = () => {
  return (
    <div className={cx("home__container")}>
      <div className={cx("home__info")}>
        <div className={cx("home__info-content")}>
          <h1>Dive Into The Depths Of Virtual Reality</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            blanditiis omnis, earum architecto deleniti ratione impedit? Amet
            facere, numquam maiores incidunt aliquam deserunt distinctio sed
            error, est esse corrupti earum.
          </p>
          <div className={cx("home__info-btn")}>
            <Button large={true} primary={true}>
              Build your world
            </Button>
            <div>
              <GrLinkNext size={29} />
            </div>
          </div>
        </div>
        <div className={cx("home__info-img")}>
          <div className={cx("home__info-img--custom")}>
            <img src={vg} />
          </div>
        </div>
      </div>
      <div className={cx("home__contact")}>
        <div className={cx("home__contact-heading")}>
          <BiMap size={48} />
          <div className={cx("home__contact-visit-des")}>
            <h1>Pay Us a Visit</h1>
            <p>Union St, Seattle, WA 98101, United States</p>
          </div>
        </div>

        <div className={cx("home__contact-heading")}>
          <BiPhoneCall size={48} />
          <div className={cx("home__contact-visit-des")}>
            <h1>Give Us a Call</h1>
            <p>110-1111-1010</p>
          </div>
        </div>

        <div className={cx("home__contact-heading")}>
          <BiMailSend size={48} />
          <div className={cx("home__contact-visit-des")}>
            <h1>Send Us a Message</h1>
            <p>Contact@HydraVtech.com</p>
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Howto />
    </div>
  );
};

export default Home;
