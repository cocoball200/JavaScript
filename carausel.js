const imgList = document.querySelectorAll(".images");
const imgLength = imgList.length;
console.log(imgLength);

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
  if ((imgIdx = -1)) {
    imgIdx = imgLength - 1; // inx는 0부터 시작, 0~4
  } else {
  }
}

function init() {}
init();
