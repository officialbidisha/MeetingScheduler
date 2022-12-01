import logo from "./logo.svg";
import "./App.css";
import InfoOfMeetings from "./pages/InfoOfMeetings";
import AddMeeting from "./pages/AddMeeting";
import FreeRooms from "./pages/FreeRooms";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InfoOfMeetings />}>
            <Route path="meetings" element={<InfoOfMeetings />} />
            <Route path="addmeetings" element={<AddMeeting />} />
            <Route path="freerooms" element={<FreeRooms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
