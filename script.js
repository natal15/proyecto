window.onload = function(){
    preparePoint1()
    preparePoint2()
    preparePoint3()
    preparePoint4()
    preparePoint5()
    preparePoint6()
    preparePoint7()
    addButton()
    
    
 
}

const form = {
    
    point1: function() {
        
        if (document.querySelector('.correct1').checked){
          q1=1} else {q1=0}   
                       
        if (q1==1) { 
            document.querySelector('.question1').style.color='#66CC33'
            }  else if (document.querySelector('.wrong1').checked) {
                document.querySelector('.question1').style.color='#FF0000'
        }

        if(document.querySelector('.correct1').checked) {
            document.querySelector('.wrong1').disabled = true
        }

        if(document.querySelector('.wrong1').checked) {
            document.querySelector('.correct1').disabled = true  
        }
    },    
    point2: function() {
        
        if (document.querySelector('.correct2').checked){
         q2=1}  else  {q2=0}
         
        if (q2==1) { 
             document.querySelector('.question2').style.color='#66CC33'
             } else if (document.querySelector('.wrong2').checked) {
                document.querySelector('.question2').style.color='#FF0000'
        }
        
        if(document.querySelector('.correct2').checked) {
            document.querySelector('.wrong2').disabled = true
        }

        if(document.querySelector('.wrong2').checked) {
            document.querySelector('.correct2').disabled = true  
        }   
    }, 
    point3: function() {
        
        if (document.querySelector('.correct3').checked){
         q3=3} else {q3=0}
         
        if (q3==3) { 
            document.querySelector('.question3').style.color='#66CC33'
             }  else if (document.querySelector('.wrong3').checked) {
                document.querySelector('.question3').style.color='#FF0000'
        }
        if(document.querySelector('.correct3').checked) {
            document.querySelector('.wrong3').disabled = true
        }

        if(document.querySelector('.wrong3').checked) {
            document.querySelector('.correct3').disabled = true  
        }
    },
    point4: function() {
        
        if (document.querySelector('.correct4').checked){
         q4=3} else {q4=0}
         
        if (q4==3) { 
             document.querySelector('.question4').style.color='#66CC33'
             }  else if (document.querySelector('.wrong4').checked) {
                 document.querySelector('.question4').style.color='#FF0000'
        }

        if(document.querySelector('.correct4').checked) {
            document.querySelector('.wrong4').disabled = true
        }

        if(document.querySelector('.wrong4').checked) {
            document.querySelector('.correct4').disabled = true  
        }   
    },
    point5: function() {
        
        if (document.querySelector('.correct5').checked){
         q5=3} else {q5=0}
         
        if (q5==3) { 
             document.querySelector('.question5').style.color='#66CC33'
             }  else if (document.querySelector('.wrong5').checked) {
                 document.querySelector('.question5').style.color='#FF0000'
        }

        if(document.querySelector('.correct5').checked) {
            document.querySelector('.wrong5').disabled = true
        }

        if(document.querySelector('.wrong5').checked) {
            document.querySelector('.correct5').disabled = true  
        }    
    },
    point6: function() {
        
        if (document.querySelector('.correct6').checked){
         q6=5} else {q6=0}
         
        if (q6==5) { 
             document.querySelector('.question6').style.color='#66CC33'
             }  else if (document.querySelector('.wrong6').checked) {
                 document.querySelector('.question6').style.color='#FF0000'
        }

        if(document.querySelector('.correct6').checked) {
            document.querySelector('.wrong6').disabled = true
        }

        if(document.querySelector('.wrong6').checked) {
            document.querySelector('.correct6').disabled = true  
        } 
    },
    point7: function() {
        
        if (document.querySelector('.correct7').checked){
         q7=5} else {q7=0}
         
        if (q7==5) { 
             document.querySelector('.question7').style.color='#66CC33'
             }  else if (document.querySelector('.wrong7').checked) {
                 document.querySelector('.question7').style.color='#FF0000'
        }

        if(document.querySelector('.correct7').checked) {
            document.querySelector('.wrong7').disabled = true
        }

        if(document.querySelector('.wrong7').checked) {
            document.querySelector('.correct7').disabled = true  
        }    
    },
}

function preparePoint1() {
    const puntuation = document.querySelector('.quest1')
    puntuation.addEventListener('click', function() {
        form.point1()
    })
}

function preparePoint2() {
    const puntuation = document.querySelector('.quest2')
    puntuation.addEventListener('click', function() {
        form.point2()
    })
}

function preparePoint3() {
    const puntuation = document.querySelector('.quest3')
    puntuation.addEventListener('click', function() {
        form.point3()
    })
}

function preparePoint4() {
    const puntuation = document.querySelector('.quest4')
    puntuation.addEventListener('click', function() {
        form.point4()
    })
}

function preparePoint5() {
    const puntuation = document.querySelector('.quest5')
    puntuation.addEventListener('click', function() {
        form.point5()
    })
}

function preparePoint6() {
    const puntuation = document.querySelector('.quest6')
    puntuation.addEventListener('click', function() {
        form.point6()
    })
}

function preparePoint7() {
    const puntuation = document.querySelector('.quest7')
    puntuation.addEventListener('click', function() {
        form.point7()
    })
}

function addButton() {
    const button = document.createElement('button')
    button.innerText = 'Submit'
    button.classList.add('.submit')
    
    button.addEventListener('click', showPoints)
     

    const sectionButton = document.querySelector('.button')
    sectionButton.appendChild(button)

}

function showPoints() {
    const goal = document.createElement('div')
    const scoreBoard = document.createElement('p')
    scoreBoard.innerHTML = 'Tu puntuación es ' + scores()
    goal.classList.add('scoreBoard')
    const points = document.querySelector('.points')
    const good = document.querySelector('.good')
    const bad = document.querySelector('.bad')
    if (scores() > 10) {
        goal.classList.add('right'), good.classList.replace('good', 'best')
    } else if (scores() < 11) {
        goal.classList.add('fail'), bad.classList.replace('bad', 'worst')
    }

    points.appendChild(goal)
    goal.appendChild(scoreBoard)    

}

function scores() {

    if (document.querySelector('.correct1').checked){
        q1=1 } else {q1=0}

    if (document.querySelector('.correct2').checked){
        q2=1 } else {q2=0}

    if (document.querySelector('.correct3').checked){
        q3=3 } else {q3=0}
        
    if (document.querySelector('.correct4').checked){
        q4=3 } else {q4=0}
        
    if (document.querySelector('.correct5').checked){
        q5=3 } else {q5=0}
        
    if (document.querySelector('.correct6').checked){
        q6=5 } else {q6=0}
        
    if (document.querySelector('.correct7').checked){
        q7=5 } else {q7=0}    
         
   
    const score = q1+q2+q3+q4+q5+q6+q7
    return score

}

setTimeout(function() {
    const timeCorrect1 = document.querySelector('.correct1').disabled = true
    const timeWrong1 = document.querySelector('.wrong1').disabled = true
    }, 10000)

setTimeout(function() {
    const timeCorrect2 = document.querySelector('.correct2').disabled = true
    const timeWrong2 = document.querySelector('.wrong2').disabled = true
    }, 20000)    

setTimeout(function() {
    const timeCorrect3 = document.querySelector('.correct3').disabled = true
    const timeWrong3 = document.querySelector('.wrong3').disabled = true
    }, 30000) 

setTimeout(function() {
    const timeCorrect4 = document.querySelector('.correct4').disabled = true
    const timeWrong4 = document.querySelector('.wrong4').disabled = true
    }, 40000) 

setTimeout(function() {
    const timeCorrect5 = document.querySelector('.correct5').disabled = true
    const timeWrong5 = document.querySelector('.wrong5').disabled = true
    }, 50000)     

setTimeout(function() {
    const timeCorrect6 = document.querySelector('.correct6').disabled = true
    const timeWrong6 = document.querySelector('.wrong6').disabled = true
    }, 60000)     
    
setTimeout(function() {
    const timeCorrect7 = document.querySelector('.correct7').disabled = true
    const timeWrong7 = document.querySelector('.wrong7').disabled = true
    }, 70000)    

   
      
  













