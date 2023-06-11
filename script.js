let marka = ["Bmw", "Opel", "Ford", "Kia"];

let model = [
  ["m4", "m5"],
  ["astra", "vectra"],
  ["fusion", "focus"],
  ["optima", "rio"],
];
function check() {
  let num = document.getElementById("bm");
  let acc = `<option disabled selected value=''>Marka Select</option>`;
  for (let i = 0; i < marka.length; i++) {
    acc += `<option  value="${i}">${marka[i]}</option> `;
  }

  num.innerHTML = acc;
}

check();
function selected(value) {
  let val = document.getElementById("op");
  let acc = `<option disabled selected value=''>Model Select</option>`;
  for (let j = 0; j < model[value].length; j++) {
    console.log(model[value][j]);
    acc += `<option onchange="image()" value="${j}">${model[value][j]}</option> `;
  }

  val.innerHTML = acc;
}
let img_arr = [
  [`img/m5.jpg`, `img/m4.jpg`],
  [`img/astra.jpg`, `img/vectra.jpg`],
  [`img/fusin.jpg`, `img/focus.jpg`],
  ['./img/optima.jpg', `img/rio.jpg`],
];

function image(value) {
  let div_image = document.getElementById("img_div");
  let num = document.getElementById("bm").value;
  img_div.innerHTML = `<img src='${img_arr[num][value]}'/>`;
}
