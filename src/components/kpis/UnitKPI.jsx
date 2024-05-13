import React from "react";

const UnitKPI = ({ value, unit }) => {
  // Check if the value is larger than the total

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex-wrap items-center justify-center text-center">
      <span className="font-bold text-6xl">{value}</span>
      <span className="text-2xl text-slate-600 font-light">{unit}</span>
    </div>
  );
};

export default UnitKPI;
