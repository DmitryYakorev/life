let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');
let arr = [];

function initLife() {
  let n = 30, m = 30;
  for (let i = 0;i < n;++i) for (let j = 0; j < m; ++j) {
    arr[i][j] = 0;
  }
}
initLife();