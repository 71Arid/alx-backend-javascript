export default function updateStudentGradeByCity(array, city, newGrade) {
  let newarr = [];
  if (array instanceof Array) {
    newarr = array.filter((value) => value.location === city)
      .map((value) => {
        const obj = value;
        for (const g of newGrade) {
          if (obj.id === g.studentId) {
            obj.grade = g.grade;
          }
        }
        if (!obj.grade) {
          obj.grade = 'N/A';
        }
        return obj;
      });
  }
  return newarr;
}
