import React from "react";

// Define an array of objects containing pillar name and image URL
const pillars = [
  { name: "Health", imageUrl: "/health.png" },
  { name: "Work", imageUrl: "/work.png" },
  { name: "Hobby", imageUrl: "/hobby.png" },
  { name: "Sport", imageUrl: "/sport.png" },
  { name: "Family", imageUrl: "/family.png" },
  { name: "Friends", imageUrl: "/friends.png" },
];

const PillarTable = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Render each cell */}
      {pillars.map((pillar, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center h-auto rounded-lg overflow-hidden border border-gray-300 p-2"
        >
          {/* Render the pillar image */}
          <img
            src={pillar.imageUrl}
            alt={pillar.name}
            className="w-40 h-40 object-cover rounded-full mb-2"
          />
          {/* Render the pillar name */}
          <span className="text-center">{pillar.name}</span>
        </div>
      ))}
    </div>
  );
};

export default PillarTable;
