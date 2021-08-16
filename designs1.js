// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Your code goes here!
const userColor = document.getElementById('colorPicker').value;
const theTable = document.getElementById('pixelCanvas');
const theHeight = document.getElementById('inputHeight').value;
const theWidth = document.getElementById('inputWidth').value;
const size = document.getElementById('sizePicker');
function makeGrid(theHeight, theWidth) {
    // Creating the grid by the user
    for (const i = 0; i < theHight; i++) {
        const row = theTable.insertRow(i);
        for (const x = 0; x < theWidth; x++) {
            row.insertCell(x);
        }
    }
};
// when user make grid, the correspond happend
size.addEventListener('submit', function (evt) {
    evt.preventDefault();
    makeGrid();
});
// when user choose color, the respond occured
theTable.addEventListener('click', function (evt) {
    if (evt.target.nodeName.toLowerCase() === 'td') {
        evt.target.style.backgroundColor = theColor;
    }
});
}
