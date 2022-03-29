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
let easygo = colorify1
  setTimeout(easygo, 1000, '2', '2')
  setTimeout(function() {
    let randomo = document.querySelector(`#container > div:nth-child(2) > div:nth-child(2)`)
    randomo.style.backgroundColor = 'white'
},1500)


  setTimeout(easygo, 2000, '1', '6')
  setTimeout(function() {
    let randomo = document.querySelector(`#container > div:nth-child(1) > div:nth-child(6)`)
    randomo.style.backgroundColor = 'white'
},2500)


  setTimeout(easygo, 3000, '2', '5')
  setTimeout(function() {
    let randomo = document.querySelector(`#container > div:nth-child(2) > div:nth-child(5)`)
    randomo.style.backgroundColor = 'white'
},3500)

   
    
})

function gogo() {}

medBtn.addEventListener('click', () => {
    container.textContent = ''
    makeBoth(12,12)
    
let groga = colorify2

    setTimeout(groga, 1000, '7', '12')
    setTimeout(function() {
        let randomo = document.querySelector(`#container > div:nth-child(7) > div:nth-child(12)`)
        randomo.style.backgroundColor = 'white'
    },1500)

    setTimeout(groga, 2000, '1', '8')
    setTimeout(function() {
        let randomo = document.querySelector(`#container > div:nth-child(1) > div:nth-child(8)`)
        randomo.style.backgroundColor = 'white'
    },2500)

    setTimeout(groga, 3000, '11', '5')
    setTimeout(function() {
        let randomo = document.querySelector(`#container > div:nth-child(11) > div:nth-child(5)`)
        randomo.style.backgroundColor = 'white'
    },3500)
   

  
     
})

hardBtn.addEventListener('click', () => {
    container.textContent = ''
    makeBoth(21,21)
})
function tweR() {
    let rando = Math.floor(Math.random() * 12) + 1;
    return rando
}

container.addEventListener('click', gogo, false)
function gogo(e) {
    
  let es = event.target


    let tar1 = document.querySelector(`#container > div:nth-child(2) > div:nth-child(2)`)
     let tar2 = document.querySelector(`#container > div:nth-child(1) > div:nth-child(6)`)
    let tar3 = document.querySelector(`#container > div:nth-child(2) > div:nth-child(5)`)

    if (es === container || es === rows) {
        false;
    } else if (es === tar1) {
        tar1.style.backgroundColor = 'green'
  
    } else if (es === tar2) {
        tar2.style.backgroundColor = 'green'
  
    } else if (es === tar3) {
        tar3.style.backgroundColor = 'green'

    }
  
    if (tar1.style.backgroundColor === 'green' && tar2.style.backgroundColor === 'green' && tar3.style.backgroundColor === 'green') {
        setTimeout(() => {
            alert('You have won! Go to the next level')
        }, 1000);
        location.reload()
    }

    console.log(es)
   

}
    
