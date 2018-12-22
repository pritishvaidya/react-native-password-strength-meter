function calculateAbsoluteWidth(width, levels, spacing) {
  const levelsLength = levels.length;
  const actualWidth = width - (spacing * (levelsLength - 2)) - 20;
  return actualWidth / levelsLength;
}

export default calculateAbsoluteWidth;
