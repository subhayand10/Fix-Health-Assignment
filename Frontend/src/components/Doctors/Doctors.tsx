import React, { useState } from "react";
import TestimonialsBox from "../../components/Testimonials/TestimonialsBox";
import styles from "./Doctors.module.css";
import DoctorsNotFound from "../Doctors/DoctorsNotFound";
import CircularProgress from "@mui/material/CircularProgress";

interface DoctorsProps {
  data: Array<{
    id: number;
    Name: string;
    expertise: string;
    city: string;
  }>;
}

const Doctors: React.FC<DoctorsProps> = ({ data,loading }) => {
  return (
    <>
      {loading ? (
        <div className={styles.loading}>
          <p>Backend Spinning Up! Approx 15-20s to load.</p>
          <CircularProgress color="secondary" />
        </div>
      ) : data.length === 0 ? (
        <DoctorsNotFound />
      ) : (
        <div className={styles.clientWrapper}>
          {data.map((each) => (
            <TestimonialsBox data={each} key={each.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Doctors;
