import styles from "../styles/styles.module.css";

const AppointmentForm = ({ appointment, setAppointment, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* Date */}
      <div className={styles["form-field-wrapper"]}>
        <label htmlFor="appointment-date">Date</label>
        <input
          type="date"
          name="appointment-date"
          id="appointment-date"
          required
          value={appointment.date}
          onChange={(e) =>
            setAppointment({
              ...appointment,
              date: e.target.value,
            })
          }
          className={styles["form-field"]}
        />
      </div>

      {/* Time */}
      <div className={styles["form-field-wrapper"]}>
        <label htmlFor="appointment-time">Time</label>
        <input
          type="time"
          name="appointment-time"
          id="appointment-time"
          required
          value={appointment.time}
          onChange={(e) =>
            setAppointment({
              ...appointment,
              time: e.target.value,
            })
          }
          className={styles["form-field"]}
        />
      </div>

      {/* Location */}
      <div className={styles["form-field-wrapper"]}>
        <label htmlFor="appointment-location">Location</label>
        <select
          name="appointment-location"
          id="appointment-location"
          required
          value={appointment.location}
          onChange={(e) =>
            setAppointment({
              ...appointment,
              location: e.target.value,
            })
          }
          className={styles["form-field"]}
        >
          <option hidden disabled value="">
            -
          </option>
          <option value="San Diego">San Diego</option>
          <option value="Portland">Portland</option>
          <option value="Seattle">Seattle</option>
          <option value="London">London</option>
          <option value="Orlando">Orlando</option>
        </select>
      </div>

      {/* Description */}
      <div className={styles["form-field-wrapper"]}>
        <label htmlFor="appointment-description">Description</label>
        <input
          type="text"
          name="appointment-description"
          id="appointment-description"
          value={appointment.description}
          onChange={(e) =>
            setAppointment({
              ...appointment,
              description: e.target.value,
            })
          }
          className={styles["form-field"]}
        />
      </div>

      <button type="submit" className={styles.button}>
        Confirm
      </button>
    </form>
  );
};

export default AppointmentForm;
