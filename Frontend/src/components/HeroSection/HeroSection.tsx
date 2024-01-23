import React from "react";
import styles from "./HeroSection.module.css";
import HeroImage from "../../assets/doctors.jpg"

const HeroSection = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftWrapper}>
        <div className={styles.textWrapper}>
          <h1>
            Experience the Benefits of Advanced Technology and Expert Care
          </h1>
        </div>
        <div className={styles.text2Wrapper}>
          <p>
            Empowering your wellness journey, one appointment at a time. Your
            health, our priority
          </p>
        </div>
      </div>
      <div className={styles.imgContainer}>
          <img src ={HeroImage} alt="hero"/>
      </div>
    </div>
  );
};

export default HeroSection;
