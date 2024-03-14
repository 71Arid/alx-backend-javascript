"use strict";
exports.__esModule = true;
var subjects_1 = require("./js/subjects");
var cTeacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10
};
console.log('C++');
var cppSubject = new subjects_1.Subjects.Cpp();
cppSubject.setTeacher(cTeacher);
console.log(cppSubject.getRequirements());
console.log(cppSubject.getAvailableTeacher());
console.log('\nJava');
var javaSubject = new subjects_1.Subjects.Java();
javaSubject.setTeacher(cTeacher); // No Java experience, so no teacher available
console.log(javaSubject.getRequirements());
console.log(javaSubject.getAvailableTeacher());
console.log('\nReact');
var reactSubject = new subjects_1.Subjects.React();
reactSubject.setTeacher(cTeacher); // No React experience, so no teacher available
console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher());
