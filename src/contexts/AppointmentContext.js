import { createContext, useState, useEffect } from "react";

export const AppointmentContext = createContext();

const AppointmentContextProvider = (props) => {
  const [appointments, setAppointments] = useState(
    // Initialize appointments with local storage if any exists
    JSON.parse(localStorage.getItem("appointments")) ?? []
  );

  const createAppointment = (appointmentDetails) => {
    // Without using a database or external library for generating UUIDs,
    // there isn't a great solution for giving React lists a key.
    // Using the index would break here.
    // Current date is the next best alternative, but I don't like it.
    setAppointments([
      ...appointments,
      { ...appointmentDetails, id: Date.now() },
    ]);
  };

  const updateAppointment = (id, updatedAppointment) => {
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id ? updatedAppointment : appointment
      )
    );
  };

  const deleteAppointment = (id) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  };

  // When appointments is updated, it gets saved to local storage.
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        createAppointment,
        updateAppointment,
        deleteAppointment,
      }}
    >
      {props.children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentContextProvider;
