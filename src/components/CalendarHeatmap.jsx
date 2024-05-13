import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "./CalendarHeatmap.css";

const dateFormatter = (date) => {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

const CustomCalendarHeatmap = () => {
  const values = [
    { date: new Date("2024-01-01"), count: 1 },
    { date: new Date("2024-02-01"), count: 2 },
    { date: new Date("2024-03-01"), count: 3 },
    { date: new Date("2024-04-01"), count: 4 },
    { date: new Date("2024-05-01"), count: 5 },
    { date: new Date("2024-06-01"), count: 6 },
    { date: new Date("2024-07-01"), count: 7 },
    { date: new Date("2024-08-01"), count: 8 },
    { date: new Date("2024-09-01"), count: 9 },
    { date: new Date("2024-10-01"), count: 10 },
    { date: new Date("2024-11-01"), count: 11 },
    { date: new Date("2024-12-01"), count: 12 },
    { date: new Date("2025-01-01"), count: 13 },
    // Add more data as needed
  ];

  const startDate = new Date("2024-01-01");
  const endDate = new Date("2025-01-01");
  const filteredValues = values.filter(
    (value) => value && value.date instanceof Date
  );

  console.log(filteredValues);

  return (
    <div className="w-full px-4">
      <h2 className="text-center mt-8 mb-6 text-lg font-semibold">
        Calendar Heatmap
      </h2>
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

          const content = `${dateFormatter(value.date)} - ${
            value.count
          } entries`;

          return {
            "data-tooltip-id": "my-tooltip",
            "data-tooltip-content": content,
          };
        }}
        showWeekdayLabels={true}
      />
      <ReactTooltip
        id="my-tooltip"
        style={{ backgroundColor: "rgb(0, 255, 30)", color: "#222" }}
      />
    </div>
  );
};

export default CustomCalendarHeatmap;
