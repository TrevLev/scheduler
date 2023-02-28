import AppointmentList from "./AppointmentList";
import AppointmentContextProvider from "../contexts/AppointmentContext";
import CreateAppointment from "./CreateAppointment";
import "../styles/reset.css";
import "../styles/globals.css";
import styles from "../styles/styles.module.css";

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>SCHEDULER</h1>
      <AppointmentContextProvider>
        <CreateAppointment />
        <AppointmentList />
      </AppointmentContextProvider>
    </div>
  );
}

export default App;
