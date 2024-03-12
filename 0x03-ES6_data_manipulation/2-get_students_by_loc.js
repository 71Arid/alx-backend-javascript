export default function getStudentsByLocation(array, string) {
  const newarr = array.filter((value) => value.location === string);
  return newarr;
}
