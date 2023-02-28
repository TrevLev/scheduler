import AppointmentList from "./components/AppointmentList";
import AppointmentContextProvider from "./contexts/AppointmentContext";
import CreateAppointment from "./components/CreateAppointment";

function App() {
  return (
    <div className="App">
      <AppointmentContextProvider>
        <CreateAppointment />
        <AppointmentList />
      </AppointmentContextProvider>
    </div>
  );
}

export default App;
