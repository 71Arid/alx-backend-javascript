interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }
  getCoffeeBreak() {
    return 'Getting a coffee break';
  }
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }
  getCoffeeBreak() {
    return 'cannot have a break';
  }
  workTeacherTasks() {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'string') {
    if (parseInt(salary) < 500) {
      return new Teacher();
    }
  } else if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

function isDirector(employee: Teacher | Director): boolean {
  if (employee instanceof Director) {
    return true;
  }
  return false;
}

function executeWork(employee: Teacher | Director): string {
  if (employee instanceof Director) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}
console.log(teachClass('Math'));
console.log(teachClass('History'));
