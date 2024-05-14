let canvas = document.getElementById("c1");
let start = document.getElementsByClassName('start');
// console.log(start);

let ctx = canvas.getContext("2d")
let arr = [];
let timer;

function initLife() {
  let n = 30,
    m = 30
  for (let i = 0; i < n; ++i) {
    arr[i] = []
    for (let j = 0; j < m; ++j) {
      arr[i][j] = 0
    }
  }
}
function newSet(event) {
  let x = event.offsetX
  let y = event.offsetY
  x = Math.floor(x / 10)
  y = Math.floor(y / 10)
  arr[x][y] = 1;
  draw();
}
function draw() {
  ctx.clearRect (0, 0, 300, 300);
  for (let i = 0; i < 30; ++i) {

    for (let j = 0; j < 30; ++j) {
      if (arr[i][j] === 1) ctx.fillRect (i * 10,j * 10, 10, 10);
    }
  }
}
function go() {
  let arr2 = [];  for (let i = 0; i < 30; ++i) {
    arr2[i] = [];
    for (let j = 0; j < 30; ++j) {
      let neighbors = 0;
   //   console.log(neighbors, arr, i, j);
      if (arr[fmm(i) - 1][j] === 1) neighbors++;
     // console.log('!');
      if (arr[i][fmp(j) + 1] === 1) neighbors++;
     // console.log('!');
      if (arr[fmp(i) + 1][j] === 1) neighbors++;
     // console.log('!');
      if (arr[i][fmm(j) - 1] === 1) neighbors++;
      if (arr[fmm(i) - 1][fmp(j) + 1] === 1) neighbors++;
      if (arr[fmp(i) + 1][fmp(j) + 1] === 1) neighbors++;
      if (arr[fmp(i) + 1][fmm(j) - 1] === 1) neighbors++;
      if (arr[fmm(i) - 1][fmm(j) - 1] === 1) neighbors++;

      if (neighbors === 2 || neighbors === 3) arr2[i][j] = 1;
      else arr2[i][j] = 0;
    }
  }
  arr = arr2;
  console.log(arr);
  draw();
  timer = setInterval(go,1000);
}
function fmm(i) {
  if (i === 0) return 30
  else return i;
}
function fmp(i) {
  if (i === 29) return -1
  else return i;
}
initLife()
// timer = setInterval(go,1000);

canvas.addEventListener("click", newSet);
start[0].addEventListener("click", go);

//start.addEventListener("click",go);
