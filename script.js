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

})


function firstL(t1, t2, t3, t4, t5, t6, t7, t8) {
 
  setTimeout(colorify1, 1000, t1, t2)
  setTimeout(function() {
    let randomo = document.querySelector(`#container > div:nth-child(${t1}) > div:nth-child(${t2})`)
    randomo.style.backgroundColor = 'white'
},1200)


  setTimeout(colorify1, 1300, t3, t4)
  setTimeout(function() {
    let randomo = document.querySelector(`#container > div:nth-child(${t3}) > div:nth-child(${t4})`)
    randomo.style.backgroundColor = 'white'
},1500)


  setTimeout(colorify1, 1700, t5, t6)
  setTimeout(function() {
    let randomo = document.querySelector(`#container > div:nth-child(${t5}) > div:nth-child(${t6})`)
    randomo.style.backgroundColor = 'white'
},1900)

setTimeout(colorify1, 2000, t7, t8)
setTimeout(function() {
  let randomo = document.querySelector(`#container > div:nth-child(${t7}) > div:nth-child(${t8})`)
  randomo.style.backgroundColor = 'white'
},2200)
}






function conta() {
    container.textContent =''
}




function gogo() {}

medBtn.addEventListener('click', () => {
    container.textContent = ''
    makeBoth(12,12)
    firstL('3', '1', '11', '5', '9', '3', '12', '1')
})

hardBtn.addEventListener('click', () => {
    container.textContent = ''
    makeBoth(21,21)
})


container.addEventListener('click', gogo, false)
function gogo(e) {
    
  let es = event.target
  

// Easy Mode
    let tar1 = document.querySelector(`#container > div:nth-child(3) > div:nth-child(1)`)
     let tar2 = document.querySelector(`#container > div:nth-child(11) > div:nth-child(5)`)
    let tar3 = document.querySelector(`#container > div:nth-child(9) > div:nth-child(3)`)
    let tar4 = document.querySelector(`#container > div:nth-child(12) > div:nth-child(1)`)


    if (es === container || es === rows) {
        false;
    }   
 
    
    else if (es === tar1) {
        tar1.style.backgroundColor = 'green'
  
    } else if (es === tar2) {
        tar2.style.backgroundColor = 'green'
  
    } else if (es === tar3) {
        tar3.style.backgroundColor = 'green'

    } else if (es === tar4) {
        tar4.style.backgroundColor = 'green'
    }
    
    else {
        es.style.backgroundColor = 'red'
    
    }



    if ( tar1.style.backgroundColor === 'green' && tar2.style.backgroundColor === 'green' && tar3.style.backgroundColor === 'green' && tar4.style.backgroundColor === 'green') {
        setTimeout(() => {
            alert('You have won! Go to the next level')
        }, 1000);
        setTimeout(conta, 800)
        setTimeout(makeBoth, 800, 12, 12)
    }


}
    
