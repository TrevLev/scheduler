import { useContext } from "react";
import { AppointmentContext } from "../contexts/AppointmentContext";
import AppointmentListItem from "./AppointmentListItem";
import styles from "../styles/styles.module.css";

const AppointmentList = () => {
  const { appointments } = useContext(AppointmentContext);

  return appointments.length ? (
    <div className={styles["appointment-list-wrapper"]}>
      <div className={styles.container}>
        <h2 className={styles["header-text"]}>My Appointments</h2>
        <ul className={styles["appointment-list"]}>
          {appointments.map((appointment) => {
            return (
              <AppointmentListItem
                appointment={appointment}
                key={appointment.id}
              />
            );
          })}
        </ul>
      </div>
    </div>
  ) : (
    <div className={styles["appointment-list-wrapper"]}>
      <div className={styles.container}>
        <p>You don't have any appointments yet. Try adding some!</p>
      </div>
    </div>
  );
};

export default AppointmentList;
