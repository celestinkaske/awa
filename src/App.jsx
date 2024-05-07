import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import { useState } from "react";
import { Header } from "./components/Header";
import CustomCalendarHeatmap from "./components/CalendarHeatmap";
import TabNavigation from "./components/navigation/TabNavigation";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Analysis from "./pages/Analysis";
import Sounds from "./pages/Sounds";
import Settings from "./pages/Settings";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <TabNavigation
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <div className="border-l border-r border-b p-4">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/Analysis" element={<Analysis />} />
          <Route path="/Sounds" element={<Sounds />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/" element={<Outlet />} />{" "}
          {/* Add this route for child routes */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
