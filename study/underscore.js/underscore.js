_.each([1, 2, 3], function (val, idx, list) {
    console.log(val, idx, list)
});
// 1 0 list
// 2 1 list
//3 2 list
//[1,2, 3] return 값은 원래 자신이 받았던 첫번째 인자 그대로 리턴,
//Array.prototype.forEach 는 undefindes 리턴 . 

var list = [1, 2, 3, 4, 5, 6];
_.reject(list, function (num) {
    return num % 2 == 0;
}) // [1,3,5 ] true로 평가된 값을 제외하고, 새로운 리스트 반환. 

_.contains([1, 2, 3], 3);
//true 동일한 값이 포함되어 있는지 true/false 값 리턴. 

var user = [{
    id: 1, name: 'lol', age: '22'
},
{
    id: 2, name: 'ol', age: '32'
},
{
    id: 3, name: 'lo', age: '52'
},
{
    id: 4, name: 'lg', age: '32'
},
{
    id: 5, name: 'pp', age: '12'
}]

_.pluck(users, 'name'); //name에 대한 value값 들 리턴. 

