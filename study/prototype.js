var Student = function (name) {
    this._name = name;
};

Student.prototype.getName = function () {
    return this._name;
}

var mia = new Student('Mia');
mia.__proto__.getName();

Student.prototype === mia.__proto__;