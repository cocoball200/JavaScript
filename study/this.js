function Person(name, gender) {
    this.name = name;
    this.gender = gender;
    console.log(this, this.gender, this.name);
}

function Student(name, gender, school) {
    Person.call(this, name, gender);
    this.school = school;
    console.log(this, name, gender, school);
}
function Employee(name, gender, company) {
    Person.apply(this, [name, gender]);
    this.company = company;
    console.log(this, name, gender, company);
}

const by = new Student('Mia', 'female', 'yonsei');
console.log("1" + by);
const jn = new Employee('hayoon', 'female', 'google');
console.log("2" + jn);

function a() {
    var argv = Array.from(arguments);
    argv.forEach(function (arg) {
        console.log(arg);
    });
}

a(1, 2, 3);

document.body.innerHTML = '<div>a</div><div>b</div><div>c</div>';
var nodeLIst = document.querySelector('div');
var nodeArr = Array.from(nodeLIst);
nodeArr.forEach(function (node) {
    console.log(node);
});

  //Array.from을 쓰면 굳이 Array.prototype.slice.call()로 할 필요가 없다. 