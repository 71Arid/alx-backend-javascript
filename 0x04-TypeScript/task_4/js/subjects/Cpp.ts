namespace Subjects {
  export class Cpp extends Subjects.Subject {
    public getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    public getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingC) {
        return super.getAvailableTeacher();
      } else {
        return 'No available teacher (requires C++ experience)';
      }
    }
  }
}
