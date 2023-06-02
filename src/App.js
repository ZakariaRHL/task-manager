import "./App.css";
import TaskForm from "./Component/Task-Form/TaskForm";
import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";
import Map from "./Layout/Map";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<TaskForm />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
