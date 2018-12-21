function calculateAbsoluteWidth(percent, limit) {
  const width = (percent * limit) / 100;
  return Math.round(width);
}

export default calculateAbsoluteWidth;
