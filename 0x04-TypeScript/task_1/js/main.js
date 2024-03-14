var printTeacher = function (firstName, lastName) { return "".concat(firstName.slice(0, 1), ".").concat(lastName); };
var studentClass = /** @class */ (function () {
    function studentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    studentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    studentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return studentClass;
}());
var student1 = new studentClass('Kai', 'Harverts');
console.log(student1.displayName());
