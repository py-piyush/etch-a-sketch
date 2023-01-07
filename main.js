const sketchpad = document.querySelector(".sketch-pad");
let color = "black";
const colorButtons = document.querySelectorAll(".color");
const clearButton = document.querySelector(".clear");
const pick = document.querySelector("#input-color");
const slider = document.querySelector("#slider");
const hex = "0123456789abcdef";

function createGrid(num) {
  sketchpad.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  sketchpad.style.gridTemplaeRows = `repeat(${num}, 1fr)`;
  for (let i = 0, area = num * num; i < area; i++) {
    let grid = document.createElement("div");
    sketchpad.appendChild(grid);
  }
  const grids = sketchpad.querySelectorAll("div");
  grids.forEach((grid) =>
    grid.addEventListener("mouseover", (e) => colorGrid(e.target))
  );
}

function colorGrid(gridItem) {
  if (color === 'rainbow') {
    temp = '#'
    for (let i = 0; i < 6; i++){
        let index = Math.floor(Math.random()*16)
        temp += hex[index]
    }
    gridItem.style.backgroundColor = temp;
  }
  else {
    gridItem.style.backgroundColor = color;
  }
}
createGrid(10);

function changeColor(e){
    color = e.target.dataset.color
}
function pickColor(e){
    color = e.target.value
}
function clearGrids(){
const grids = sketchpad.querySelectorAll("div");
  grids.forEach((grid) =>
    grid.style.backgroundColor = '#efefef'
  );
}
function changeSize(){
    let grids = sketchpad.querySelectorAll('div');
    let sizeInfo = document.querySelector('.slider-container>p')
    let size = slider.value
    grids.forEach((grid)=>grid.remove())
    createGrid(size)
    sizeInfo.textContent = `Grid Size: ${size} x ${size}`
}

colorButtons.forEach(btn=>btn.addEventListener('click', changeColor))
pick.addEventListener('input', pickColor)
clearButton.addEventListener('click', clearGrids)
slider.addEventListener('input', changeSize)