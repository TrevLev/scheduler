import { useContext, useState } from "react";
import { AppointmentContext } from "../contexts/AppointmentContext";
import AppointmentForm from "./AppointmentForm";
import styles from "../styles/styles.module.css";

const AppointmentListItem = ({ appointment }) => {
  const { updateAppointment, deleteAppointment } =
    useContext(AppointmentContext);

  const [isUpdating, setIsUpdating] = useState(false);

  // State for appointment form
  const [updatedAppointment, setUpdatedAppointment] = useState(appointment);

  // On submit for appointment form
  const handleSubmit = (e) => {
    e.preventDefault();
    updateAppointment(appointment.id, updatedAppointment);

    setIsUpdating(false);
  };

  const formatDate = (date) => {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);

    return `${month}/${day}/${year}`;
  };

  const formatTime = (time) => {
    const hours = Number(time.substring(0, 2));
    const minutes = Number(time.substring(3, 5));

    const isAm = hours < 12;

    return `${hours % 12 || 12}:${minutes} ${isAm ? "AM" : "PM"}`;
  };

  return isUpdating ? (
    <AppointmentForm
      appointment={updatedAppointment}
      setAppointment={setUpdatedAppointment}
      handleSubmit={handleSubmit}
    />
  ) : (
    <li>
      <p>
        {formatDate(appointment.date)} at {formatTime(appointment.time)},{" "}
        {appointment.location}
      </p>
      <div className={styles["description-text"]}>
        <p>{appointment.description}</p>
      </div>
      <button onClick={() => setIsUpdating(true)} className={styles.button}>
        Edit
      </button>
      <button
        onClick={() => deleteAppointment(appointment.id)}
        className={styles.button}
      >
        Delete
      </button>
    </li>
  );
};

export default AppointmentListItem;
