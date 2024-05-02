import React from "react";
import healthIcon from "../assets/health.png";
import workIcon from "../assets/work.png";
import hobbyIcon from "../assets/hobby.png";
import sportIcon from "../assets/sport.png";
import familyIcon from "../assets/family.png";
import friendsIcon from "../assets/friends.png";

const PillarKPI = ({ mostUsedPillar }) => {
  const getPillarIcon = (pillar) => {
    switch (pillar) {
      case "Health":
        return healthIcon;
      case "Work":
        return workIcon;
      case "Hobby":
        return hobbyIcon;
      case "Sport":
        return sportIcon;
      case "Family":
        return familyIcon;
      case "Friends":
        return friendsIcon;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
      <img src={getPillarIcon(mostUsedPillar)} alt={mostUsedPillar} />
      <span className="text-xl font-semibold mt-2">{mostUsedPillar}</span>
    </div>
  );
};

export default PillarKPI;
