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

console.log(printTeacher('Trence', 'Mark'));
