import React from "react";
import styles from "./TestimonialsBox.module.css";

interface TestimonialData {
  name: string;
  designation: string;
  description: string;
  image: string;
  city?: never; // Optional property for TestimonialData
}

interface DoctorsData {
  Name: string;
  expertise: string;
  city: string;
}

interface TestimonialsBoxProps {
  data: TestimonialData | DoctorsData;
}

const TestimonialsBox: React.FC<TestimonialsBoxProps> = ({ data })  => {
  let testimonialData=true
  if("city" in data)
  {
    testimonialData=false;
  }

  return (
    <>
      {testimonialData
        ? "image" in data && (
            <div className={styles.wrapper}>
              <div className={styles.imgContainer}>
                <img src={data.image} alt="client" />
              </div>

              <div className={styles.header}>
                <h4>{data.name}</h4>
                <p>{data.designation}</p>
              </div>

              <div className={styles.description}>
                <p>{data.description}</p>
              </div>
            </div>
          )
        : "Name" in data && (
            <div className={styles.wrapper}>
              <div className={styles.imgContainer}>
                <h4>Dr. {data.Name}</h4>
              </div>
              <div className={styles.header}>
                <h4>{data.expertise}</h4>
                <p>{data.city}</p>
              </div>
            </div>
          )}
    </>
  );
};

export default TestimonialsBox;
