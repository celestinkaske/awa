import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const CustomCalendarHeatmap = () => {
  const values = [
    { date: new Date("2024-01-01"), count: 1 },
    { date: new Date("2024-01-02"), count: 2 },
    { date: new Date("2024-01-03"), count: 3 },
    { date: new Date("2024-01-04"), count: 4 },
    { date: new Date("2024-01-05"), count: 5 },
    { date: new Date("2024-01-05"), count: 6 },
    { date: new Date("2024-01-06"), count: 7 },
    { date: new Date("2024-01-07"), count: 8 },
    { date: new Date("2024-01-08"), count: 9 },
    { date: new Date("2024-01-09"), count: 10 },
    { date: new Date("2024-01-10"), count: 11 },
    { date: new Date("2024-01-11"), count: 12 },
    { date: new Date("2024-01-12"), count: 13 },
    // Add more data as needed
  ];

  const startDate = new Date("2024-01-01");
  const endDate = new Date("2025-01-01");
  const filteredValues = values.filter(
    (value) => value && value.date instanceof Date
  );

  console.log(filteredValues);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Calendar Heatmap</h2>
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={filteredValues}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-github-${value.count}`;
        }}
        tooltipDataAttrs={(value) => {
          // if null or undefined
          if (!value.date) return null;
          return {
            "data-tip": `${value.date.toString()} - ${
              value.count
            } contributions`,
          };
        }}
        showWeekdayLabels={true}
      />
    </div>
  );
};

export default CustomCalendarHeatmap;
