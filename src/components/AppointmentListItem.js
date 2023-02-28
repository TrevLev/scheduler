import { useContext, useState } from "react";
import { AppointmentContext } from "../contexts/AppointmentContext";
import AppointmentForm from "./AppointmentForm";

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

  return isUpdating ? (
    <AppointmentForm
      appointment={updatedAppointment}
      setAppointment={setUpdatedAppointment}
      handleSubmit={handleSubmit}
    />
  ) : (
    <li>
      <p>
        When: {appointment.date} at {appointment.time} | Where:{" "}
        {appointment.location}
      </p>
      <p>{appointment.description}</p>
      <button onClick={() => setIsUpdating(true)}>Edit</button>
      <button onClick={() => deleteAppointment(appointment.id)}>Delete</button>
    </li>
  );
};

export default AppointmentListItem;
