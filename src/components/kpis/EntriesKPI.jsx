import React from "react";

const EntriesKPI = ({ value, total }) => {
  // Check if the value is larger than the total
  const isValueLarger = value > total;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
      <span>
        {isValueLarger ? (
          <>
            <span className="font-bold text-6xl">{value}</span> /{" "}
            <span className="text-2xl text-slate-600 font-light">{total}</span>
          </>
        ) : (
          <>
            <span className="font-bold text-6xl">{value}</span> /{" "}
            <span className="text-2xl text-slate-600 font-light">{total}</span>
          </>
        )}
      </span>
    </div>
  );
};

export default EntriesKPI;
