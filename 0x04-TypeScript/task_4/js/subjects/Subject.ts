namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;

    set setTeacher(teacher: Subjects.Teacher): void {
      this.teacher = teacher;
    }
  }
}
