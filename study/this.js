var obj = {
    methodA: function () { console.log(this); },
    inner: { methodB: function () { console.log(this); } }
};

obj.methodA(); //obj
obj['methodA'](); //obj

obj.inner.methodB(); //inner
obj.inner['methodB'](); //inner
obj['inner'].methodB(); //inner
obj['inner']['methodB'](); //inner 

var obj1 = {
    outer: function () {
        console.log(this);
        var innerFunc = function () {
            console.log(this);
        }
        innerFunc()

        var obj2 = {
            innerMethod: innerFunc
        };
        obj.innerMethod();
    }
};
obj1.outer()

//this 를 바인딩하지 않는 함수  상위 스코프의 this를 그대로 활용할 수 있다.

var arrow = {
    outer: function () {
        console.log(this);
        var innerFunc = () => {
            console.log(this);
        };
        innerFunc();
    }
};
arrow.outer();


var thisFunc = {
    a: 1,
    method: function (x, y) {
        console.log(this.a, x, y);
    }
};
thisFunc.method(2, 3);
thisFunc.method.call({ a: 4 }, 5, 6);

function a() {
    var argv = Array.prototype.slice.call(arguments);
    argv.forEach(function (arg) {
        console.log(arg);
    });
}
a(1, 2, 3);

document.body.innerHTML = '<div>a</div><div>b</div><div>c</div>';
var nodeList = document.querySelectorAll('div');
var nodeArr = Array.prototype.slice.call(nodeList);
nodeArr.forEach(function (node) { console.log(node); });

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