export default function getListstudentIds(array) {
  let newarr = [];
  if (array instanceof Array) {
    newarr = array.map((value) => value.id);
  } else {
    return [];
  }
  return newarr;
}
