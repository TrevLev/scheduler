import { useState } from "react";
import { useContext } from "react";
import { AppointmentContext } from "../contexts/AppointmentContext";
import AppointmentForm from "./AppointmentForm";
import styles from "../styles/styles.module.css";

const CreateAppointment = () => {
  const initialAppointmentDetails = {
    date: "",
    time: "",
    location: "",
    description: "",
  };

  const { createAppointment } = useContext(AppointmentContext);

  // State for appointment form
  const [newAppointment, setNewAppointment] = useState(
    initialAppointmentDetails
  );

  // On submit for appointment form
  const handleSubmit = (e) => {
    e.preventDefault();
    createAppointment(newAppointment);

    setNewAppointment(initialAppointmentDetails);
  };

  return (
    <div className={styles["create-appointment-wrapper"]}>
      <div className={styles.container}>
        <h2 className={styles["header-text"]}>Create an Appointment</h2>
        <AppointmentForm
          appointment={newAppointment}
          setAppointment={setNewAppointment}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default CreateAppointment;
