// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Your code goes here!
const userColor = document.getElementById('colorPicker');
const theTable = document.getElementById('pixelCanvas');
const theHeight = document.getElementById('inputHeight').value;
const theWidth = document.getElementById('inputWidth').value;
const size = document.getElementById('sizePicker');

// when user make grid, the correspond happend
size.addEventListener('submit', function (a) {
    a.preventDefault();
    theTable.firstElementChild.remove();
    makeGrid(theHeight, theWidth);
  });

// when user choose color, the respond occured
cell.addEventListener('click',function(a) {
  if (a.target.nodeName.toLowerCase() === 'td') {
    a.target.style.backgroundColor = userColor.value;
  }
});

// Creating the grid by the user
function makeGrid(theHeight, theWidth) {
  theTable.innerHTML = '';
  for (const i = 0; i < theHeight; i += 1) {
    const row = theTable.insertRow(i);
    for (const x = 0; x < theWidth; x += 1) {
      const cell = row.insertCell(x);
  }
 }
}
