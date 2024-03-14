interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface PrintTeacher {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacher = (firstName, lastName) => `${firstName.slice(0,1)}.${lastName}`;

interface StudentConstructor {
  new (firstName: string, lastName: string): Student;
}

interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class studentClass implements Student {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}
