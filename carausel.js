const imgList = document.querySelectorAll(".images");
const imgLength = imgList.length;
const box = document.querySelector(".box__column_center");

var imgIdx = 0;
var chevron = document.querySelectorAll(".chevron");
var pre = chevron[0];
var next = chevron[1];

pre.addEventListener("click", function () {
  miner(-1);
});
next.addEventListener("click", function () {
  plus(1);
});

function plus(num) {
  imgIdx += num;
  showImg(imgIdx);
}
function miner(num) {
  imgIdx -= num;
  showImg(imgIdx);
}
function showImg(imgIdx) {
  if (imgIdx == -1) {
    imgIdx == imgLength - 1; // idx는 0부터 시작, 0~4
    //!! 여기서 어떻게 스타일 줘서 css 변화시켜야할지 모르겠어요.
    box[imgIdx].Style.Display;
  } else {
  }
}

function init() {}
init();
