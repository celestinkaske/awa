import { useState } from "react";
import { Header } from "./components/Header";
import CustomCalendarHeatmap from "./components/CalendarHeatmap";
import HomeTab from "./pages/Home";
import NotesTab from "./pages/Notes";
import AnalysisTab from "./pages/Analysis";
import TabNavigation from "./components/navigation/TabNavigation";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <TabNavigation
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <div className="border-l border-r border-b p-4">
        {activeIndex === 0 && <HomeTab />}
        {activeIndex === 1 && <NotesTab />}
        {activeIndex === 2 && <AnalysisTab />}
        {activeIndex === 3 && (
          <div>
            <Header>Sounds</Header>
          </div>
        )}
        {activeIndex === 4 && (
          <div>
            <Header>Your Settings</Header>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
