const body = document.querySelector("body");
const column = document.querySelector(".hex-color__column");
const value = document.querySelector(".hex-color__column__value");
const button = document.querySelector("input");
var fullNum = "";

function genColor() {
  var hexNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  var result = "#"; //#붙이기

  for (var i = 0; i < 6; i++) {
    var randomColor = Math.floor(Math.random() * hexNumber.length); //6개 뽑아오고! 1~f값무작위로 가져옴
    //아래에 선언해야함. 같은 수가 반복되기 때문에
    result += hexNumber[randomColor]; //hax넘버에 있는 인덱스를 랜덤 컬러를 통해 가져오겠다.
  }
  return result;
}

button.addEventListener("click", function (event) {
  fullNum = genColor();
  console.log(fullNum);
  value.innerHTML = fullNum;
  body.style.backgroundColor = fullNum;
});
