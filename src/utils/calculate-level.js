function calculateLevel(score, levels) {
  const normalizedScore = score / 100;
  const normalizedIndex = Math.floor((levels.length - 1) * normalizedScore);
  return levels[normalizedIndex];
}

export default calculateLevel;
