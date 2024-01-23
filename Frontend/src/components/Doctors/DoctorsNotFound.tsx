import React from "react";
import styles from "./DoctorsNotFound.module.css"; 

const DoctorsNotFound = () => {
  return (
    <div className={styles.doctorsContainer}>
      <div className={styles.quirkyText}>Doctors Not Found! 😷</div>
    </div>
  );
};

export default DoctorsNotFound;
