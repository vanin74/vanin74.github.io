var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var mas = [];
var count = 0;
var stop = 0;
var population = 0;
var stop = 0;
var level = 0;
ctx.fillStyle = 'blue';

canvas.onclick = function (event) {
  var x = event.offsetX;
  var y = event.offsetY;
  //console.log(x);
  //console.log(y);
  x = Math.floor(x / 10);
  y = Math.floor(y / 10);
  mas[y][x] = 1;
  //console.log(y,x);
  //console.log(mas);
  drawField();
};
function goLife() {
  var n = 30,
    m = 30;
  for (var i = 0; i < m; i++) {
    mas[i] = [];
    for (var j = 0; j < n; j++) {
      mas[i][j] = [0];
    }
  }
}
goLife();
function stopLife() {
  stop = 1;
  //console.log(stop);
}

function clearField() {
  ctx.clearRect(0, 0, 300, 300);
  for (var i = 0; i < 30; i++) {
    for (var j = 0; j < 30; j++) {
      mas[i][j] = [0];
    }
  }
  count = 0;
  document.getElementById('count').innerHTML = count;
  stop = 0;
  population = 0;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML = 'EMPTY';
}

function drawField() {
  ctx.clearRect(0, 0, 300, 300);

  for (var i = 0; i < 30; i++) {
    for (var j = 0; j < 30; j++) {
      if (mas[i][j] == 1) {
        ctx.fillRect(j * 10, i * 10, 10, 10);
      }
    }
  }

  count_population();
  document.getElementById('popul').innerHTML = population;
}
function startLife() {
  var mas2 = [];
  //console.log(mas);
  for (var i = 0; i < 30; i++) {
    mas2[i] = [];

    for (var j = 0; j < 30; j++) {
      var neighbors = 0;
      if (mas[fpm(i) - 1][j] == 1) neighbors++;
      if (mas[i][fpp(j) + 1] == 1) neighbors++;
      if (mas[fpp(i) + 1][j] == 1) neighbors++;
      if (mas[i][fpm(j) - 1] == 1) neighbors++;
      if (mas[fpm(i) - 1][fpp(j) + 1] == 1) neighbors++;
      if (mas[fpp(i) + 1][fpp(j) + 1] == 1) neighbors++;
      if (mas[fpp(i) + 1][fpm(j) - 1] == 1) neighbors++;
      if (mas[fpm(i) - 1][fpm(j) - 1] == 1) neighbors++;

      if (mas[i][j] == 1 && neighbors < 2) mas2[i][j] = 0;
      if (mas[i][j] == 1 && neighbors > 3) mas2[i][j] = 0;
      if ((mas[i][j] == 1 && neighbors == 2) || neighbors == 3) mas2[i][j] = 1;
      if (mas[i][j] == 0 && neighbors == 3) mas2[i][j] = 1;
    }
  }
  mas = mas2;
  drawField();
  count++;

  if (level == 1) {
    check1level();
  }

  if (level == 2) {
    check2level();
  }

  if (level == 3) {
    check3level();
  }

  if (level == 4) {
    check4level();
  }

  if (level == 5) {
    check5level();
  }

  document.getElementById('count').innerHTML = count;
  document.getElementById('popul').innerHTML = population;
  if (stop == 0) timer = setTimeout(startLife, 700);
}
function fpm(i) {
  if (i == 0) return 30;
  else return i;
}
function fpp(i) {
  if (i == 29) return -1;
  else return i;
}

function level1() {
  mas[14][4] = 1;
  mas[16][4] = 1;
  level = 1;
  population = 2;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 3 к 12 поколению';
  drawField();
}

function level2() {
  mas[14][8] = 1;
  mas[14][7] = 1;
  level = 2;
  population = 2;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 4 к 13 поколению';
  drawField();
}

function level3() {
  mas[2][3] = 1;
  mas[3][3] = 1;
  mas[2][25] = 1;
  mas[2][26] = 1;
  mas[27][3] = 1;
  mas[27][4] = 1;
  mas[26][26] = 1;
  mas[27][26] = 1;
  mas[15][16] = 1;
  mas[15][14] = 1;
  mas[14][15] = 1;
  mas[16][15] = 1;
  level = 3;
  population = 8;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 28 к 23 поколению';
  drawField();
}

function level4() {
  mas[1][1] = 1;
  mas[3][1] = 1;
  mas[3][2] = 1;
  mas[3][3] = 1;
  mas[2][3] = 1;
  mas[1][28] = 1;
  mas[3][28] = 1;
  mas[3][27] = 1;
  mas[3][26] = 1;
  mas[2][26] = 1;
  mas[28][1] = 1;
  mas[26][1] = 1;
  mas[26][2] = 1;
  mas[26][3] = 1;
  mas[27][3] = 1;
  mas[28][28] = 1;
  mas[26][28] = 1;
  mas[26][27] = 1;
  mas[26][26] = 1;
  mas[27][26] = 1;
  mas[14][14] = 1;
  mas[15][15] = 1;
  level = 4;
  population = 22;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 43 к 0 поколению';
  drawField();
}

function level5() {
  mas[2][21] = 1;
  mas[3][21] = 1;
  mas[3][23] = 1;
  mas[5][24] = 1;
  mas[5][25] = 1;
  mas[7][24] = 1;
  mas[8][22] = 1;
  mas[9][22] = 1;
  mas[8][20] = 1;
  mas[6][19] = 1;
  mas[6][18] = 1;
  mas[22][20] = 1;
  mas[21][20] = 1;
  mas[23][19] = 1;
  mas[23][18] = 1;
  mas[22][17] = 1;
  mas[21][17] = 1;
  mas[20][19] = 1;
  mas[20][18] = 1;
  mas[20][16] = 1;
  mas[20][15] = 1;
  mas[18][17] = 1;
  mas[19][17] = 1;
  mas[17][16] = 1;
  mas[19][14] = 1;
  mas[18][14] = 1;
  mas[15][6] = 1;
  mas[14][5] = 1;
  mas[14][7] = 1;
  mas[13][5] = 1;
  mas[13][7] = 1;
  mas[13][4] = 1;
  mas[13][8] = 1;
  mas[13][3] = 1;
  mas[13][9] = 1;
  mas[12][2] = 1;
  mas[12][10] = 1;
  mas[11][2] = 1;
  mas[11][10] = 1;
  mas[11][3] = 1;
  level = 5;
  population = 22;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 43 к 14 поколению';
  drawField();
}

function count_population() {
  population = 0;
  for (var i = 0; i < 30; i++) {
    for (var j = 0; j < 30; j++) {
      if (mas[i][j] == 1) {
        population++;
      }
    }
  }
  console.log(population);
}

function check1level() {
  count_population();
  if (count == 12 && population == 3) {
    stopLife();
    document.getElementById('info').innerHTML = 'You score';
  } else if (count > 12 && population != 3) {
    stopLife();
    document.getElementById('info').innerHTML = 'Didn’t work, Try again';
  }
}

function check2level() {
  count_population();
  if (count == 13 && population == 4) {
    stopLife();
    document.getElementById('info').innerHTML = 'You score';
  } else if (count > 13 && population != 4) {
    stopLife();
    document.getElementById('info').innerHTML = 'Didn’t work, Try again';
  }
}

function check3level() {
  count_population();
  if (count == 23 && population == 28) {
    stopLife();
    document.getElementById('info').innerHTML = 'You score';
  } else if (count > 23 && population != 28) {
    stopLife();
    document.getElementById('info').innerHTML = 'Didn’t work, Try again';
  }
}

function check4level() {
  count_population();
  if (count == 43 && population == 0) {
    stopLife();
    document.getElementById('info').innerHTML = 'You score';
  } else if (count > 43 && population != 0) {
    stopLife();
    document.getElementById('info').innerHTML = 'Didn’t work, Try again';
  }
}

function check5level() {
  count_population();
  if (count == 14 && population == 43) {
    stopLife();
    document.getElementById('info').innerHTML = 'You score';
  } else if (count > 14 && population != 43) {
    stopLife();
    document.getElementById('info').innerHTML = 'Didn’t work, Try again';
  }
}

document.getElementById('start').onclick = startLife;
document.getElementById('level1').onclick = level1;
document.getElementById('level2').onclick = level2;
document.getElementById('level3').onclick = level3;
document.getElementById('level4').onclick = level4;
document.getElementById('level5').onclick = level5;
document.getElementById('clearF').onclick = clearField;
document.getElementById('stop').onclick = stopLife;
