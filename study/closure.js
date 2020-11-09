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
