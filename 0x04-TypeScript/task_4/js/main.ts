/// <reference path = "./subjects/Cpp.ts" />
/// <reference path = "./subjects/Java.ts" /> 
/// <reference path = "./subjects/React.ts" /> 
/// <reference path = "./subjects/Subject.ts" /> 
/// <reference path = "./subjects/Teacher.ts" /> 

const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

console.log('C++');
const cppSubject = new Subjects.Cpp();
cppSubject.setTeacher(cTeacher);
console.log(cppSubject.getRequirements());
console.log(cppSubject.getAvailableTeacher());

console.log('Java');
const javaSubject = new Subjects.Java();
javaSubject.setTeacher(cTeacher);
console.log(javaSubject.getRequirements());
console.log(javaSubject.getAvailableTeacher());

console.log('React');
const reactSubject = new Subjects.React();
reactSubject.setTeacher(cTeacher);
console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher());
