let canvas = document.getElementById("c1");
let start = document.getElementsByClassName('start');
// console.log(start);
let stop = document.getElementById('circles').value;
// console.log(stop);

let str = document.getElementById('size').value;
str = str.split('X').map(el => +el);
// console.log(str);
[m, n] = str;
//console.log(m, n);
document.getElementById('circles').onchange = New_stop;
document.getElementById('size').onchange = New_size;
let ctx = canvas.getContext("2d")
let arr = [];
let timer;
let count = 0;
function New_size() {
  str = document.getElementById('size').value;
str = str.split('X');
[m, n] = str;
draw();
}
function New_stop() {
  stop = document.getElementById('circles').value;
}
function initLife() {
  
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
  ctx.clearRect (0, 0, n * 10, m * 10);
  for (let i = 0; i < n; ++i) {

    for (let j = 0; j < m; ++j) {
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

      if (/*neighbors === 2 ||*/ neighbors === 3) arr2[i][j] = 1;
      else if (neighbors === 2) arr2[i][j] = arr[i][j];
      else arr2[i][j] = 0
    }
  }
  arr = arr2;
  if (count < stop) {count++;
  document.getElementsByClassName('count')[0].innerHTML = count;
  draw();
  timer = setTimeout(go,1000);
}
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
