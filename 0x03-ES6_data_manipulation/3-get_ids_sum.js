export default function getStudentIdsSum(array) {
  let newarr = [];
  if (array instanceof Array) {
    newarr = array.reduce((total, value) => value + total, 0);
  } else {
    return 0;
  }
  return newarr;
}
