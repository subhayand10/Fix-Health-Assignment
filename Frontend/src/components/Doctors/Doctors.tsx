import React from "react";
import TestimonialsBox from "../../components/Testimonials/TestimonialsBox";
import styles from "./Doctors.module.css";
import DoctorsNotFound from "../Doctors/DoctorsNotFound";

interface DoctorsProps {
  data: Array<{
    id: number;
    Name: string;
    expertise: string;
    city: string;
  }>;
}

const Doctors: React.FC<DoctorsProps> = ({ data }) => {
  console.log(data + "dasda");
  return (
    <>
      {data.length === 0 ? (
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
