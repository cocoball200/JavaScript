var Person = function (name, age, sex, number) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.number = number;
}

var Student = function (studentNumber) {
    this.studentNumber = studentNumber;
};

Person.prototype.getName = function () {
    return this.name;
}

var mia = new Student('Mia');
mia.__proto__.getName();

Student.prototype === mia.__proto__;

var professor = function (department) {
    this._department = department;
}
