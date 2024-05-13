import React, { useState } from "react";

const DateFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState("week");

  // Function to handle filter change
  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    // Fetch data or update graphs based on the selected filter
  };

  return (
    <div className="flex justify-end mb-4 w-full">
      <select
        className="border border-gray-300 rounded-md mr-4 ml-auto px-2 py-1"
        value={selectedFilter}
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        <option value="week">Week</option>
        <option value="month">Month</option>
        <option value="year">Year</option>
      </select>
    </div>
  );
};

export default DateFilter;
