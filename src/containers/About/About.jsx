import React from "react";
import classNames from "classnames/bind";
import styles from "./About.module.scss";
import { GrFormNext } from "react-icons/gr";
import { Button } from "../../components";
import { vr } from "../../assets";

const cx = classNames.bind(styles);

function About() {
  return (
    <div className={cx("about__wrapper")}>
      <div className={cx("about__intro")}>
        <div className={cx("about__intro-heading")}>
          <h1>INTRODUCTION</h1>
          <div className={cx("about__intro-heading-des")}>
            <p>TO HYDRA VR</p>
            <GrFormNext />
          </div>
        </div>
        <div className={cx("about__intro-des")}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            veritatis culpa dolor cum quos odio quis sunt nihil libero nemo
            dolorem aspernatur dignissimos eaque quaerat, in commodi iusto
            eveniet eos.
          </p>
        </div>
      </div>
      <div className={cx("about__content")}>
        <div className={cx("about__content-img")}>
          <img src={vr} />
        </div>
        <div className={cx("about__content-vr")}>
          <h1>About</h1>
          <h2>HYDRA VR</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            velit eum minima reiciendis officia numquam facere qui, quisquam
            eaque hic cumque maxime nobis beatae. Tempora exercitationem nemo
            minima modi quas!
          </p>
          <div className={cx("about__content-vr-btn")}>
            <Button primary={true} large={true}>
              LETS' GET IN TOUCH
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
