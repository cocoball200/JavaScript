/* 클로저, 함수가 선언될 당시 주변 환경와 함께 같히는 것을 의미한다
클로저는 함수가 선언되는 주변 환경과 관련하여 생성되는 개념
실행시점은 관계가 없다! */

function say() {
    const a = 1;
    const b = 2;

    function log() {
        console.log(a + b);
    }
    return log;
}
const func = say();

func();


/* 참조 카운트를 0 으로 만드는 방법은*/
var outer = (function () {
    var a = 1;
    var inner = function () {
        return a++;
    };
    return inner;
})();

console.log(outer())
console.log(outer())
outer = null;

(function () {
    var a = 0;
    var intervalId = null;
    var inner = function () {
        if (++a >= 10) {
            clearInterval(intervalId);
            inner = null;
        }
        console.log(a);
    };
    intervalId = setInterval(inner, 1000);
})()

    (function () {
        var count = 0;
        var button = document.createElement('button');
        button.innerText = 'click';

        var clickHandler = function () {
            console.log(++count, 'times clicked');
            if (count >= 10) {
                button.removeEventListener('click', clickHandler);
                clickHandler = null;
            }
        };
        button.addEventListener('click', clickHandler);
        document.body.appendChild(button);
    })();


var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');

fruits.forEach(function (fruit) {
    var $li = document.createElement('li');
    $li.innerText = fruit;
    $li.addEventListener('click', function () {
        alert('your choice is ' + fruit);
    });
    $ul.appendChild($li);
});
document.body.appendChild($ul);

var alertFruit = function (fruit) {
    alert('your choice is ' + fruit);
};
fruits.forEach(function (fruit) {
    var $li = document.createElement('li');
    $li.innerText = fruit;
    //$li.addEventListener('click', alertFruit);
    $li.addEventListener('click', alertFruit.bind(null, fruit)); //null은 this 
    $ul.appendChild($li);
});
document.body.appendChild($ul);
alertFruit(fruits[1]);

var alertFruitBuilder = function (fruit) {
    return function () {
        alert('your choice is ' + fruit);
    };
};
fruits.forEach(function (fruit) {
    var $li = document.createElement('li');
    $li.innerText = fruit;
    $li.addEventListener('click', alertFruitBuilder(fruit));
    $ul.appendChild($li);
});
