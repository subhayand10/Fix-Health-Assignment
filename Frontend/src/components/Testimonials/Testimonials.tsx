import React from "react";
import styles from "./Testimonials.module.css";
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
    designation: "Heart Patient",
    description:
      "Dr. Rahul Ranjan is an exceptional and dedicated healthcare professional who has consistently demonstrated unwavering commitment to the well-being of his patients.",
  },
  {
    id: 2,
    image: client2,
    name: "Devon Lane",
    designation: "Back pain patient",
    description:
      "Dr. Rahul Ranjan is an exceptional and dedicated healthcare professional who has consistently demonstrated unwavering commitment to the well-being of his patients. ",
  },
  {
    id: 3,
    image: client3,
    name: "Robert Fox",
    designation: "Kidney stones patient",
    description:
      "Dr. Rahul Ranjan is an exceptional and dedicated healthcare professional who has consistently demonstrated unwavering commitment to the well-being of his patients.",
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
