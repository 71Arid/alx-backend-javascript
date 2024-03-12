export default function getStudentIdsSum(array) {
  let newarr = [];
  if (array instanceof Array) {
    newarr = array.reduce((total, value) => value.id + total, 0);
  } else {
    return 0;
  }
  return newarr;
}
