namespace Subjects {
  export class Java extends Subjects.Subject {
    public getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    public getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingJava) {
        return super.getAvailableTeacher();
      } else {
        return 'No available teacher (requires Java experience)';
      }
    }
  }
}
