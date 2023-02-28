import { useContext } from "react";
import { AppointmentContext } from "../contexts/AppointmentContext";
import AppointmentListItem from "./AppointmentListItem";

const AppointmentList = () => {
  const { appointments } = useContext(AppointmentContext);

  return appointments.length ? (
    <div>
      <h2>My Appointments</h2>
      <ul>
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
  ) : (
    <div>You don't have any appointments.</div>
  );
};

export default AppointmentList;
