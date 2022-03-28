let container = document.querySelector('#container')
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");


const hardBtn = document.getElementById('hard')
const medBtn = document.getElementById('med')
const easyBtn = document.getElementById('easy')


function easyR() {
   let r = Math.floor(Math.random() * 6) + 1;

   return r

}
function colorify() {
    let randomo = document.querySelector(`#container > div:nth-child(${easyR()}) > div:nth-child(${easyR()})`)

    randomo.style.backgroundColor= 'black'
}

function makeBoth(rowNum, cellNum) {
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
        for (i = 0; i < rows.length; i++) {
            for (j = 0; j < cellNum; j++) {
                let newCell = document.createElement("div");
                rows[j].appendChild(newCell).className = "cell";
                    // let cellId = document.querySelectorAll('')
            };
        };
        container.style.backgroundColor = 'white'
    };



easyBtn.addEventListener('click', () => {
    container.textContent = ''
    makeBoth(6,6)

  setTimeout(colorify, 2000)
   
    
})

medBtn.addEventListener('click', () => {
    container.textContent = ''
    makeBoth(12,12)
})

hardBtn.addEventListener('click', () => {
    container.textContent = ''
    makeBoth(21,21)
})


container.addEventListener('click', function() {
    let e = event.target
console.log(e)





})