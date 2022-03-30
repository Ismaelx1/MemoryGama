let container = document.querySelector('#container')
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");


const hardBtn = document.getElementById('hard')
const medBtn = document.getElementById('med')
const easyBtn = document.getElementById('easy')


function colorify1(s3, s4) {
    let randomo = document.querySelector(`#container > div:nth-child(${s3}) > div:nth-child(${s4})`)

    randomo.style.backgroundColor= 'black'
}

function colorify2(s1, s2) {
    let randomo = document.querySelector(`#container > div:nth-child(${s1}) > div:nth-child(${s2})`)

    randomo.style.backgroundColor= 'black'
    return randomo
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
firstL('2', '2', '4', '5', '6', '3')
})


function firstL(t1, t2, t3, t4, t5, t6) {
    let easygo = colorify1
  setTimeout(easygo, 1000, t1, t2)
  setTimeout(function() {
    let randomo = document.querySelector(`#container > div:nth-child(${t1}) > div:nth-child(${t2})`)
    randomo.style.backgroundColor = 'white'
},1500)


  setTimeout(easygo, 2000, t3, t4)
  setTimeout(function() {
    let randomo = document.querySelector(`#container > div:nth-child(${t3}) > div:nth-child(${t4})`)
    randomo.style.backgroundColor = 'white'
},2500)


  setTimeout(easygo, 3000, t5, t6)
  setTimeout(function() {
    let randomo = document.querySelector(`#container > div:nth-child(${t5}) > div:nth-child(${t6})`)
    randomo.style.backgroundColor = 'white'
},3500)
}











function gogo() {}

medBtn.addEventListener('click', () => {
    container.textContent = ''
    makeBoth(12,12)
     
})

hardBtn.addEventListener('click', () => {
    container.textContent = ''
    makeBoth(21,21)
})


container.addEventListener('click', gogo, false)
function gogo(e) {
    
  let es = event.target

// Easy Mode
    let tar1 = document.querySelector(`#container > div:nth-child(2) > div:nth-child(2)`)
     let tar2 = document.querySelector(`#container > div:nth-child(4) > div:nth-child(5)`)
    let tar3 = document.querySelector(`#container > div:nth-child(6) > div:nth-child(3)`)

    if (es === container || es === rows) {
        false;
    } else if (es === tar1) {
        tar1.style.backgroundColor = 'green'
  
    } else if (es === tar2) {
        tar2.style.backgroundColor = 'green'
  
    } else if (es === tar3) {
        tar3.style.backgroundColor = 'green'

    } else {
        es.style.backgroundColor = 'red'
    
    }

    if (tar1.style.backgroundColor === 'green' && tar2.style.backgroundColor === 'green' && tar3.style.backgroundColor === 'green') {
        setTimeout(() => {
            alert('You have won! Go to the next level')
        }, 500);
     container.textContent = ''
     makeBoth(6,6)
   
    }




}
    
