import React from "react";
import classNames from "classnames/bind";
import styles from "./Services.module.scss";
import { GrFormNext } from "react-icons/gr";
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
        <div className={cx("services__item")}>
          <div className={cx("services__item-img")}>
            <img src={vr1} />
          </div>
          <h1>Header</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            quasi iste rem quos doloribus ipsam nesciunt in, eos similique
            expedita odio numquam tempore sit et fuga molestiae. Vero, sint
            quod.
          </p>
          <Button primary={true} medium={true}>
            Button
          </Button>
        </div>

        <div className={cx("services__item")}>
          <div className={cx("services__item-img")}>
            <img src={vr2} />
          </div>
          <h1>Header</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            quasi iste rem quos doloribus ipsam nesciunt in, eos similique
            expedita odio numquam tempore sit et fuga molestiae. Vero, sint
            quod.
          </p>
          <Button primary={true} medium={true}>
            Button
          </Button>
        </div>

        <div className={cx("services__item")}>
          <div className={cx("services__item-img")}>
            <img src={vr3} />
          </div>
          <h1>Header</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            quasi iste rem quos doloribus ipsam nesciunt in, eos similique
            expedita odio numquam tempore sit et fuga molestiae. Vero, sint
            quod.
          </p>
          <Button primary={true} medium={true}>
            Button
          </Button>
        </div>
        <div className={cx("services__item")}>
          <div className={cx("services__item-img")}>
            <img src={vr4} />
          </div>
          <h1>Header</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            quasi iste rem quos doloribus ipsam nesciunt in, eos similique
            expedita odio numquam tempore sit et fuga molestiae. Vero, sint
            quod.
          </p>
          <Button primary={true} medium={true}>
            Button
          </Button>
        </div>
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
          <div className={cx("services__partner-item")}>
            <img src={vrPartner1} />
          </div>

          <div className={cx("services__partner-item")}>
            <img src={vrPartner2} />
          </div>

          <div className={cx("services__partner-item")}>
            <img src={vrPartner3} />
          </div>

          <div className={cx("services__partner-item")}>
            <img src={vrPartner4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
