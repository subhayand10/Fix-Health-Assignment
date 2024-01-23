import React from "react";
import styles from "./Testimonials.module.css";
// import LeftArrow  from "../../assets/leftArrow.svg";
// import RightArrow from "../../assets/RightArrow.svg";
import { ReactComponent as LeftArrow } from "../../assets/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../assets/RightArrow.svg";
import TestimonialsBox from "./TestimonialsBox";
import client1 from "../../assets/client1.svg";
import client2 from "../../assets/client2.svg";
import client3 from "../../assets/client3.svg";

const data = [
  {
    id: 1,
    image: client1,
    name: "Jane Cooper",
    designation: "Ceo of Hunt",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia",
  },
  {
    id: 2,
    image: client2,
    name: "Devon Lane",
    designation: "Ceo of Hunt",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia",
  },
  {
    id: 3,
    image: client3,
    name: "Robert Fox",
    designation: "Ceo of Hunt",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia",
  },
  {
    id: 4,
    image: client3,
    name: "Robert Fox",
    designation: "Ceo of Hunt",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officiaconsequatduis enim velit mollit Exer. sitaliqua dolor do amet sint. Velit officia",
  },
];

const Clients = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3>Our Happy Clients</h3>
          <div className={styles.btnContainer}>
            <button className={styles.leftArrowBtn}>
              {/* <img src={LeftArrow} alt="left" /> */}
              {/* <LeftArrow /> */}
            </button>
            <button className={styles.rightArrowBtn}>
              {/* <img src={RightArrow} alt="right" /> */}
              {/* <RightArrow /> */}
            </button>
          </div>
        </div>
        <div className={styles.clientWrapper}>
          {data.map((each) => (
            <TestimonialsBox data={each} key={each.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Clients;
