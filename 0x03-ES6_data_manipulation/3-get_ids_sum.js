export default function getStudentIdsSum(array) {
  const newarr = array.reduce((total, value) => value + total, 0);
  return newarr;
}
