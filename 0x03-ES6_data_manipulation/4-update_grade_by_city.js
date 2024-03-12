export default function updateStudentGradeByCity(array, city, newGrade) {
  let newarr = [];
  if (array instanceof Array) {
    newarr = array.filter((value) => value.location === city)
      .map((value) => {
        const obj = value;
        for (const grade of newGrade) {
          if (obj.id === grade.studentId) {
            obj.grade = grade.grade;
          }
        }
        obj.grade = 'N/A';
        return obj;
      });
  }
  return newarr;
}
