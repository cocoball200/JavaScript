var Person = function (name) {
    this.name = name;
}
var p1 = new Person('사람1');
var p1Proto = Object.getPrototypeOf(p1);
var p2 = new Person.prototype.constructor('사람2');
var p3 = new p1Proto.constructor('사람3');
var p4 = new p1.__proto__.constructor('사람');
var p5 = new p1.constructor('사람5');

[p1, p2, p3, p4, p5].forEach(function (p) {
    console.log(p, p instanceof Person);
})


var NewConstructor = function () { console.log('this is new constructor'); };
var dataTypes = [1, 'test', true, {}, []];
dataTypes.forEach(function (d) {
    d.constructor = NewConstructor;
    console.log(d.constructor.name, '&', d instanceof NewConstructor);
});

var newConstructor = function () { console.log('this is new constructor'); };
dataTypes.forEach(function (d) {
    d.constructor = newConstructor;
    console.log(d.constructor.name, '&', d instanceof newConstructor);
});

dataTypes.forEach(function (d) {
    d.constructor = newConstructor;
    console.log(d.constructor.name, d.constructor);
}
/* constructor를 변경하더라도, 참조하는 대상이 변경될 뿐 이미 만들어진 인스턴스의 원형이
바뀌거나 데이터 타입이 변하는 것은 아니다. */


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
