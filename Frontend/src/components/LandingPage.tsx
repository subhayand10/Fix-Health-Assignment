import React from "react";
import styles from "./LandingPage.module.css";
import HeroSection from "./HeroSection/HeroSection";
import Booking from "./Booking/Booking";
import Testimonials from "./Testimonials/Testimonials";

const LandingPage = ({setDoctors,setLoading}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.landingPage1}>
        <HeroSection />
      </div>
      <div className={styles.contentBackground}>
        <div className={styles.contentWrapper}>
          <Booking setDoctors={setDoctors} setLoading={setLoading} />
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
