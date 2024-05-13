import React from "react";

const MoodKPI = ({ averageMood }) => {
  let color;
  let emoji;

  // Bestimme die Farbe und das Emoji basierend auf dem durchschnittlichen Mood-Wert
  if (averageMood >= 7) {
    color = "text-green-500";
    emoji = "🟢"; // Grüner Kreis
  } else if (averageMood >= 4) {
    color = "text-yellow-500";
    emoji = "🟡"; // Gelber Kreis
  } else {
    color = "text-red-500";
    emoji = "🔴"; // Roter Kreis
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
      <span className={`text-4xl font-bold ${color}`}>{emoji}</span>
      <span className="text-sm text-gray-500">Average Mood</span>
    </div>
  );
};

export default MoodKPI;
