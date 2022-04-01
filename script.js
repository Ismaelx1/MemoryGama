let container = document.querySelector('#container')
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let demo = document.getElementById('demo')
let lives = 100;

const hardBtn = document.getElementById('hard')
const medBtn = document.getElementById('med')
const easyBtn = document.getElementById('easy')


function colorify1(s3, s4) {
    let randomo = document.querySelector(`#container > div:nth-child(${s3}) > div:nth-child(${s4})`)

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

    firstL('8', '4', '11', '6', '9', '10', '3', '12')
  


    container.addEventListener('click', gogo, false)
function gogo() {
   let es = event.target
   
    let med1 = document.querySelector(`#container > div:nth-child(8) > div:nth-child(4)`)
    let med2 = document.querySelector(`#container > div:nth-child(11) > div:nth-child(6)`)
    let med3 = document.querySelector(`#container > div:nth-child(9) > div:nth-child(10)`)
    let med4 = document.querySelector(`#container > div:nth-child(3) > div:nth-child(12)`)

    if (es === container || es === rows) {false}

    else if (es === container || es === rows) {
        false;
    }   
 
    
    else if (es === med1) {
        med1.style.backgroundColor = 'green'
  
    } else if (es === med2) {
        med2.style.backgroundColor = 'green'
  
    } else if (es === med3) {
        med3.style.backgroundColor = 'green'

    } else if (es === med4) {
        med4.style.backgroundColor = 'green'
    }
    
    else {
     
        es.style.backgroundColor = 'red'
        lives -= 10;
        demo.textContent = `Your Score is ${lives}%`
    
    }

    if ( med1.style.backgroundColor === 'green' && med2.style.backgroundColor === 'green' && med3.style.backgroundColor === 'green' && med4.style.backgroundColor === 'green') {
        setTimeout(() => {
            alert('You have won! Go to the next level')
        }, 1000);
        setTimeout(conta, 800)
        setTimeout(makeBoth, 800, 12, 12) 
        setTimeout(firstL, 1200, '9', '2', '1', '12', '5', '9', '6', '1')
        setTimeout(onclik, 1200, '9', '2', '1', '12', '5', '9', '6', '1', '12', '6', '1', '4', '6', '9', '7', '11', '12', '3', '2', '6', '10', '4', '1', '5', 12, 12)
    }
}

})

hardBtn.addEventListener('click', () => {
    conta()
    makeBoth(21,21)



    firstL('8', '16', '20', '6', '15', '21', '3', '12')
  


    container.addEventListener('click', gogo, false)
function gogo() {
   let es = event.target
   
    let med1 = document.querySelector(`#container > div:nth-child(8) > div:nth-child(16)`)
    let med2 = document.querySelector(`#container > div:nth-child(20) > div:nth-child(6)`)
    let med3 = document.querySelector(`#container > div:nth-child(15) > div:nth-child(21)`)
    let med4 = document.querySelector(`#container > div:nth-child(3) > div:nth-child(12)`)

    if (es === container || es === rows) {false}

    else if (es === container || es === rows) {
        false;
    }   
 
    
    else if (es === med1) {
        med1.style.backgroundColor = 'green'
  
    } else if (es === med2) {
        med2.style.backgroundColor = 'green'
  
    } else if (es === med3) {
        med3.style.backgroundColor = 'green'

    } else if (es === med4) {
        med4.style.backgroundColor = 'green'
    }
    
    else {
     
        es.style.backgroundColor = 'red'
        lives -= 10;
        demo.textContent = `Your Score is ${lives}%`
    
    }

    if ( med1.style.backgroundColor === 'green' && med2.style.backgroundColor === 'green' && med3.style.backgroundColor === 'green' && med4.style.backgroundColor === 'green') {
        setTimeout(() => {
            alert('You have won! Go to the next level')
        }, 1000);
        setTimeout(conta, 800)
        setTimeout(makeBoth, 800, 21, 21) 
        setTimeout(firstL, 1200, '20', '2', '16', '12', '5', '17', '12', '1')
        setTimeout(onclik, 1200, '20', '2', '16', '12', '5', '17', '12', '1', '12', '17', '11', '7', '17', '9', '7', '19', '2', '18', '2', '15', '10', '4', '10', '5', 21, 21)
    }
}


})




function onclik(s1, s2, s3, s4, s5, s6, s7, s8, d1, d2, d3, d4, d5, d6, d7, d8, j1, j2, j3, j4, j5, j6, j7, j8, m1, m2) {
    container.addEventListener('click', gogo, false)
    function gogo(e) {
    
       let es = event.target
        let med1 = document.querySelector(`#container > div:nth-child(${s1}) > div:nth-child(${s2})`)
        let med2 = document.querySelector(`#container > div:nth-child(${s3}) > div:nth-child(${s4})`)
        let med3 = document.querySelector(`#container > div:nth-child(${s5}) > div:nth-child(${s6})`)
        let med4 = document.querySelector(`#container > div:nth-child(${s7}) > div:nth-child(${s8})`)
        if (es === container || es === rows) {false}
        else if (es === med1) {
            med1.style.backgroundColor = 'green'
      
        } else if (es === med2) {
            med2.style.backgroundColor = 'green'
      
        } else if (es === med3) {
            med3.style.backgroundColor = 'green'
    
        } else if (es === med4) {
            med4.style.backgroundColor = 'green'
        }
        
        else {
         
            es.style.backgroundColor = 'red'
            lives -= 10;
            demo.textContent = `Your Score is ${lives}%`
        
        }
    
        if ( med1.style.backgroundColor === 'green' && med2.style.backgroundColor === 'green' && med3.style.backgroundColor === 'green' && med4.style.backgroundColor === 'green') {
            setTimeout(() => {
             
            }, 1000);
            setTimeout(conta, 800)
            setTimeout(makeBoth, 800, m1, m2)
            setTimeout(firstL, 1200, d1, d2, d3, d4, d5, d6, d7, d8)
            setTimeout(drake, 1200, d1, d2, d3, d4, d5, d6, d7, d8, j1, j2, j3, j4, j5, j6, j7, j8, m1, m2)
        
           
        }
    }
}
   


function check(s1, s2, s3, s4, s5, s6, s7, s8) {
    container.addEventListener('click', gogo, false)
    function gogo(e) {
    
       let es = event.target
        let med1 = document.querySelector(`#container > div:nth-child(${s1}) > div:nth-child(${s2})`)
        let med2 = document.querySelector(`#container > div:nth-child(${s3}) > div:nth-child(${s4})`)
        let med3 = document.querySelector(`#container > div:nth-child(${s5}) > div:nth-child(${s6})`)
        let med4 = document.querySelector(`#container > div:nth-child(${s7}) > div:nth-child(${s8})`)
        if (es === container || es === rows) {false}
        else if (es === med1) {
            med1.style.backgroundColor = 'green'
      
        } else if (es === med2) {
            med2.style.backgroundColor = 'green'
      
        } else if (es === med3) {
            med3.style.backgroundColor = 'green'
    
        } else if (es === med4) {
            med4.style.backgroundColor = 'green'
        }
        
        else {
         
            es.style.backgroundColor = 'red'
            lives -= 10;
            demo.textContent = `Your Score is ${lives}%`
        
        }
    
        if ( med1.style.backgroundColor === 'green' && med2.style.backgroundColor === 'green' && med3.style.backgroundColor === 'green' && med4.style.backgroundColor === 'green') {
            setTimeout(() => {
                alert('You have won! Go to the next level')
            }, 1000);
            setTimeout(conta, 800)
            setTimeout(makeBoth, 800, 6, 6)
        }
     }
    }

function drake(s1, s2, s3, s4, s5, s6, s7, s8, d1, d2, d3, d4, d5, d6, d7, d8, m1, m2) {
    container.addEventListener('click', gogo, false)
    function gogo(e) {
    
       let es = event.target
        let med1 = document.querySelector(`#container > div:nth-child(${s1}) > div:nth-child(${s2})`)
        let med2 = document.querySelector(`#container > div:nth-child(${s3}) > div:nth-child(${s4})`)
        let med3 = document.querySelector(`#container > div:nth-child(${s5}) > div:nth-child(${s6})`)
        let med4 = document.querySelector(`#container > div:nth-child(${s7}) > div:nth-child(${s8})`)
        if (es === container || es === rows) {false}
        else if (es === med1) {
            med1.style.backgroundColor = 'green'
      
        } else if (es === med2) {
            med2.style.backgroundColor = 'green'
      
        } else if (es === med3) {
            med3.style.backgroundColor = 'green'
    
        } else if (es === med4) {
            med4.style.backgroundColor = 'green'
        }
        
        else {
         
            es.style.backgroundColor = 'red'
            lives -= 10;
            demo.textContent = `Your Score is ${lives}%`
        }
    
        if ( med1.style.backgroundColor === 'green' && med2.style.backgroundColor === 'green' && med3.style.backgroundColor === 'green' && med4.style.backgroundColor === 'green') {
            setTimeout(() => {
                alert('You have won! Go to the next level')
            }, 1000);
            setTimeout(conta, 800)
            setTimeout(makeBoth, 800, m1, m2)
            setTimeout(firstL, 1200, d1, d2, d3, d4, d5, d6, d7, d8)
            setTimeout(check, 1200, d1, d2, d3, d4, d5, d6, d7, d8)
        
        
           
        }
    }
}
        







easyBtn.addEventListener('click', () => {
    container.textContent = ''
    makeBoth(6,6)
    firstL('2', '4', '1', '6', '5', '1', '3', '4')
  


    container.addEventListener('click', gogo, false)
function gogo() {
   let es = event.target
   
    let med1 = document.querySelector(`#container > div:nth-child(2) > div:nth-child(4)`)
    let med2 = document.querySelector(`#container > div:nth-child(1) > div:nth-child(6)`)
    let med3 = document.querySelector(`#container > div:nth-child(5) > div:nth-child(1)`)
    let med4 = document.querySelector(`#container > div:nth-child(3) > div:nth-child(4)`)

    if (es === container || es === rows) {false}

    else if (es === container || es === rows) {
        false;
    }   
 
    
    else if (es === med1) {
        med1.style.backgroundColor = 'green'
  
    } else if (es === med2) {
        med2.style.backgroundColor = 'green'
  
    } else if (es === med3) {
        med3.style.backgroundColor = 'green'

    } else if (es === med4) {
        med4.style.backgroundColor = 'green'
    }
    
    else {
     
        es.style.backgroundColor = 'red'
        lives -= 10;
        demo.textContent = `Your Score is ${lives}%`
    
    }

    if ( med1.style.backgroundColor === 'green' && med2.style.backgroundColor === 'green' && med3.style.backgroundColor === 'green' && med4.style.backgroundColor === 'green') {
        setTimeout(() => {
            alert('You have won! Go to the next level')
        }, 1000);
        setTimeout(conta, 800)
        setTimeout(makeBoth, 800, 6, 6) 
        setTimeout(firstL, 1200, '5', '3', '2', '1', '6', '4', '2', '1')
        setTimeout(onclik, 1200, '5', '3', '2', '1', '6', '4', '2', '1', '5', '5', '6', '2', '1', '5', '3', '6', '5', '2', '6', '1', '4', '3', '5', '1', 6, 6)
    }
}


})
