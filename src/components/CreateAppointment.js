import { useState } from "react";
import { useContext } from "react";
import { AppointmentContext } from "../contexts/AppointmentContext";
import AppointmentForm from "./AppointmentForm";

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
    <>
      <h2>Create an Appointment</h2>
      <AppointmentForm
        appointment={newAppointment}
        setAppointment={setNewAppointment}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default CreateAppointment;
