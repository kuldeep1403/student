import AllStudent from "./components/AllStudent";
import AttendanceForm from "./components/AttendanceForm";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Main />
      <Routes>
        <Route path="/" element={<AllStudent />}></Route>
        <Route path="/attendanceform" element={<AttendanceForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
