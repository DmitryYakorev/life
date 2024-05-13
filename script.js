let canvas = document.getElementById("c1")
let ctx = canvas.getContext("2d")
let arr = []

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
  console.log(x , y , arr);
}
initLife()

canvas.addEventListener("click", newSet)
