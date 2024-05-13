const generateGridPosition = (index, totalWords, gridSize) => {
  // Calculate the number of rows and columns in the grid
  const numRows = Math.ceil(Math.sqrt(totalWords));
  const numCols = Math.ceil(totalWords / numRows);

  // Calculate the row and column indices for the current word
  const row = Math.floor(index / numCols);
  const col = index % numCols;

  // Calculate the width and height of each grid cell
  const cellWidth = 100 / numCols;
  const cellHeight = 100 / numRows;

  // Calculate the position of the word within the grid cell
  const offsetX = Math.random() * (cellWidth * 0.8); // Random X offset within the cell
  const offsetY = Math.random() * (cellHeight * 0.8); // Random Y offset within the cell

  // Calculate the position of the grid cell within the grid
  const gridX = col * cellWidth + offsetX;
  const gridY = row * cellHeight + offsetY;

  // Convert the grid position to percentages
  const left = `${gridX}%`;
  const top = `${gridY}%`;

  return { left, top };
};

const WordCloud = ({ data }) => {
  const calculateFontSize = (frequency) => {
    return Math.log(frequency) * 5;
  };

  return (
    <div className="word-cloud relative h-96">
      {data.map((wordData, index) => (
        <span
          key={index}
          style={{
            fontSize: `${calculateFontSize(wordData.frequency)}px`,
            position: "absolute",
            ...generateGridPosition(index, data.length, 5), // Adjust gridSize as needed
          }}
          className="word"
        >
          {wordData.word}
        </span>
      ))}
    </div>
  );
};

export default WordCloud;
