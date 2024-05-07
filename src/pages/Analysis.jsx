import React, { useState } from "react";
import { Header } from "../components/Header";
import Card from "../components/Card";
import DateFilter from "../components/DateFilter";
import UnitKPI from "../components/kpis/UnitKPI";
import EntriesKPI from "../components/kpis/EntriesKPI";
import MoodKPI from "../components/kpis/MoodKPI";
import PillarKPI from "../components/kpis/PillarKPi";
import WordCloud from "../components/WordCloud";

const Analysis = () => {
  const mostUsedPillar = "Health";
  const words = [
    { text: "Health", value: 100 },
    { text: "Work", value: 80 },
    { text: "Hobby", value: 60 },
    // Add more words as needed
  ];
  const wordData = [
    { word: "Stressed", frequency: 120 },
    { word: "Overworked", frequency: 40 },
    { word: "University", frequency: 190 },
    { word: "Alone", frequency: 200 },
    { word: "Suicide", frequency: 80 },
    { word: "Existence", frequency: 60 },
    { word: "Purpose", frequency: 100 },
    { word: "Meditation", frequency: 120 },
    { word: "Progress", frequency: 150 },
    { word: "Fight", frequency: 80 },
    { word: "Time", frequency: 100 },
    { word: "Forward", frequency: 60 },
  ];

  const data = [
    { x: "Monday", y: 3 },
    { x: "Tuesday", y: 7 },
    { x: "Wednesday", y: 5 },
    { x: "Thursday", y: 8 },
    { x: "Friday", y: 6 },
    { x: "Saturday", y: 4 },
    { x: "Sunday", y: 2 },
  ];

  // Labels for x-axis (days of the week) and y-axis (mood levels)
  const xLabels = data.map((point) => point.x);
  const yLabels = ["Bad", "Mixed", "Good"];

  return (
    <div className="p-4">
      <Header>Analyse</Header>
      {/* Filter section */}
      <div className="relative">
        {" "}
        <DateFilter></DateFilter>
      </div>

      {/* KPIs section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* KPI 1 */}
        <Card title="Total entries">
          <EntriesKPI value={50} total={100} />
        </Card>
        {/* KPI 2 */}
        <Card title="Average time spend">
          <UnitKPI value="3:30" unit="s/day"></UnitKPI>
        </Card>
        {/* KPI 3 */}
        <Card title="Average feeling">
          <MoodKPI></MoodKPI>
        </Card>
        {/* KPI 4 */}
        <Card title="Most used pillar">
          <PillarKPI mostUsedPillar={mostUsedPillar}></PillarKPI>
        </Card>
      </div>

      {/* Graphs section */}
      <div className="grid gap-4 mb-4">
        <Card title="Word cloud">
          <WordCloud data={wordData}></WordCloud>
        </Card>
        {/* Graph 1: Evolution of feeling */}
        <Card title="Evolution of feeling"></Card>
        {/* Graph 2: Weekly correlation between feeling and pillars */}
        <Card title="Weekly correlation"></Card>
        {/* Graph 3: Most used positive words */}
        <Card title="5 most used positive words"></Card>
        {/* Graph 4: Most used negative words */}
        <Card title="5 most used negative words"></Card>
      </div>
    </div>
  );
};

export default Analysis;
