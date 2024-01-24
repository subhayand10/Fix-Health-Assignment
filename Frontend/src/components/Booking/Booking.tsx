import React,{useState} from "react";
import styles from "./Booking.module.css";
import Modal from "../BookingModal/BookingModal"

const Introduction = ({ setDoctors,setLoading }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = (e) => {
    setOpenModal(true);
  };
  return (
    <>
      {openModal ? (
        <Modal
          open={openModal}
          setOpenModal={setOpenModal}
          setDoctors={setDoctors}
          setLoading={setLoading}
        />
      ) : (
        ""
      )}
      <div className={styles.wrapper}>
        <div className={styles.introHeading}>
          <button onClick={handleModal}>Book Now</button>
        </div>
        <div className={styles.vl}></div>
        <div className={styles.introType}>
          <div className={styles.arrow}>👈</div>
          <h3>Doctors at one go</h3>
          <p>Hurry up to book your appointment</p>
        </div>
      </div>
    </>
  );
};

export default Introduction;
