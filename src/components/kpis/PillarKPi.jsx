import React from "react";

const PillarKPI = ({ mostUsedPillar }) => {
  // Der Dateiname des Bildes basierend auf der am häufigsten verwendeten Säule
  const getImageFilename = (pillar) => {
    switch (pillar) {
      case "Health":
        return "health.png";
      case "Work":
        return "work.png";
      case "Hobby":
        return "hobby.png";
      case "Sport":
        return "sport.png";
      case "Family":
        return "family.png";
      case "Friends":
        return "friends.png";
      default:
        return "default.png"; // Ein Standardbild für den Fall, dass keine Übereinstimmung gefunden wurde
    }
  };

  // Der Pfad zum Bild im public-Ordner
  const imagePath = `/images/${getImageFilename(mostUsedPillar)}`;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
      <img src={imagePath} alt={mostUsedPillar} className="h-16" />
    </div>
  );
};

export default PillarKPI;
