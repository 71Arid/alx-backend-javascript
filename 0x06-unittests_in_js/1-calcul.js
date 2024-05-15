function calculateNumber(type, a, b) {
  if (type === "SUM") {
    return Math.round(a) + Math.round(b);
  } else if (type === "SUBTRACT") {
    return Math.round(a) - Math.round(b);
  } else if (type === "DIVIDE") {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
    if (roundedB === 0) {
      return "Error";
    }
    return roundedA / roundedB;
  } else {
    return;
  }
}
  
module.exports = calculateNumber;
