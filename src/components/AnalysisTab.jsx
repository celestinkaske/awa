import React, { useState } from "react";
import { Header } from "./Header";

const AnalysisTab = () => {
  const [selectedFilter, setSelectedFilter] = useState("week");

  // Function to handle filter change
  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    // Fetch data or update graphs based on the selected filter
  };

  return (
    <div className="p-4">
      <Header>Analyse</Header>
      {/* Filter section */}
      <div className="flex mb-4">
        <select
          className="px-3 py-2 border border-gray-300 rounded-md mr-4"
          value={selectedFilter}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
      </div>

      {/* KPIs section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* KPI 1 */}
        <div className="bg-white border border-gray-300 rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">Total entries</h3>
          {/* Render total entries data */}
        </div>
        {/* KPI 2 */}
        <div className="bg-white border border-gray-300 rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">Average time spend</h3>
          {/* Render average time spend data */}
        </div>
        {/* KPI 3 */}
        <div className="bg-white border border-gray-300 rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">Average feeling</h3>
          {/* Render average feeling data */}
        </div>
        {/* KPI 4 */}
        <div className="bg-white border border-gray-300 rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">Most used pillar</h3>
          {/* Render most used pillar data */}
        </div>
      </div>

      {/* Word cloud section */}
      <div className="bg-white border border-gray-300 rounded-md p-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">Word cloud</h3>
        {/* Render word cloud */}
      </div>

      {/* Graphs section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Graph 1: Evolution of feeling */}
        <div className="bg-white border border-gray-300 rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">Evolution of feeling</h3>
          {/* Render evolution of feeling graph */}
        </div>
        {/* Graph 2: Weekly correlation between feeling and pillars */}
        <div className="bg-white border border-gray-300 rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">
            Weekly correlation between feeling and pillars
          </h3>
          {/* Render weekly correlation graph */}
        </div>
      </div>

      {/* Graphs section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Graph 3: Most used positive words */}
        <div className="bg-white border border-gray-300 rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">
            Most used positive words
          </h3>
          {/* Render most used positive words graph */}
        </div>
        {/* Graph 4: Most used negative words */}
        <div className="bg-white border border-gray-300 rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">
            Most used negative words
          </h3>
          {/* Render most used negative words graph */}
        </div>
      </div>
    </div>
  );
};

export default AnalysisTab;
