import * as React from "react";
import { Header } from "../components/Header";
import CustomCalendarHeatmap from "../components/CalendarHeatmap";
import PillarTable from "../components/PillarTable";

export default function HomeTab() {
  return (
    <div>
      <Header>Your Pillars</Header>
      <PillarTable></PillarTable>
      <CustomCalendarHeatmap />
    </div>
  );
}
