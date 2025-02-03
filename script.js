let elem = document.createElement('canvas');
elem.setAttribute('id', 'c1');
let div = document.getElementsByClassName('field')[0];


div.prepend(elem);

let pi = Math.PI;

let canvas = document.getElementById("c1");
let start = document.querySelector('.start');

let stop = document.getElementById('circles').value;


let str = document.getElementById('size').value;
str = str.split('X').map(el => +el);

[n, m] = str;
elem.setAttribute('width', `${n * 10}px`);
elem.setAttribute('height', `${m * 10}px`);
div.prepend(elem);

document.getElementById('circles').onchange = New_stop;
document.getElementById('size').onchange = New_size;
let ctx = canvas.getContext("2d")
let arr = [];
let timer;
let count = 0;
function New_size() {
  str = document.getElementById('size').value;
str = str.split('X');
[n, m] = str;
elem.setAttribute('width', `${n * 10}px`);
elem.setAttribute('height', `${m * 10}px`);
canvas = document.getElementById("c1");
draw();
initLife();
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
  x = Math.floor(x / 10);
  y = Math.floor(y / 10);
 (arr[x][y] === 0) ? arr[x][y] = 1 : arr[x][y] = 0 ;
  draw();
}
function draw() {
  ctx.clearRect (0, 0, n * 10, m * 10);
  for (let i = 0; i < n; ++i) {

    for (let j = 0; j < m; ++j) {
      if (arr[i][j] === 1) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'black';
        ctx.arc((i + .5) * 10, (j + .5) * 10, 5, 0, 2 * pi , false);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        
      }
    }
  }
}
function go() {
  let arr2 = [];  for (let i = 0; i < n; ++i) {
    arr2[i] = [];
    for (let j = 0; j < m; ++j) {
      let neighbors = 0;
   
      if (arr[fmm(i) - 1][j] === 1) neighbors++;
     
      if (arr[i][fmp(j) + 1] === 1) neighbors++;
     
      if (arr[fmp(i) + 1][j] === 1) neighbors++;
     
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
  if (count < stop) {
    count++;
  document.getElementsByClassName('count')[0].innerHTML = count;
  draw();
  timer = setTimeout(go,1000);
  
}
else count = 0;
}
function fmm(i) {
  if (i === 0) return Math.min(n, m)
  else return i;
}
function fmp(i) {
  if (i === Math.min(n, m) - 1) return -1
  else return i;
}
initLife()
// timer = setInterval(go,1000);

canvas.addEventListener("click", newSet);
start.addEventListener("click", go);


