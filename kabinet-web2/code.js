
function questionselect(){

var Result = document.getElementById("Result").textContent = "Výsledek";  // reset výsledku (Thats right === Result)
var opacity = document.getElementById("Result").style.opacity = 0.2;

  /*zapnutí tlačítek*/
  var elements = document.getElementsByClassName('btn-dis');
  for (let i = 0; i < elements.length; i++) {
  elements[i].disabled = false;
  }

  document.getElementById('Btn4').disabled = true; /* vypnutí tlačítka "další otázka"*/
  
  

Geography()   // vyvolá sadu otázek ze souboru questions.js

/*var random = Math.floor(Math.random() * 3)

var questions = [q1, q2, q3]

question = questions[random]        braní otázek z toho souboru ----------------------*/ 


                        ///// hra pouze v konzoli/////
/*console.log(question.q, question.answerA, question.answerB, question.answerC)

   player = prompt("Your answer:(A,B,C)")

  if( player == question.answer){                                   
    console.log("You are right !")
}

    else{console.log("That's not right !")}*/                   



//             Stanovení otázky
var quest = document.getElementById("question").textContent = question.q
var btn = document.getElementById("Btn1").textContent = question.answerA;
var btn2 = document.getElementById("Btn2").textContent = question.answerB;
var btn3 = document.getElementById("Btn3").textContent = question.answerC;
console.log(quest,btn,btn2,btn3);
}


/*                                ------------------- složité vypisování value a porovnání s výsledkem -------------------
function button1(){   
  
  var value = document.getElementById("Btn1").value

  if( value == question.answer){
  
  var Result = document.getElementById("Result").textContent = "You are right !";
          }

    else{var Result = document.getElementById("Result").textContent = "That's not right !";}

    console.log(Result)

}

function button2(){   

  var value = document.getElementById("Btn2").value

  if( value == question.answer){
  
  var Result = document.getElementById("Result").textContent = "You are right !";
          }

    else{var Result = document.getElementById("Result").textContent = "That's not right !";}

    console.log(Result)

}

function button3(){   

  var value = document.getElementById("Btn3").value

  if( value == question.answer){
  
  var Result = document.getElementById("Result").textContent = "You are right !";
          }

    else{var Result = document.getElementById("Result").textContent = "That's not right !";}

    console.log(Result)
}
*/



var mistake = 1;
var score = document.getElementById("Score").textContent;
var s = 0;
document.getElementById("Score").textContent = score + s;

function onClick(value){

  var onClick = document.getElementById("Result").style.opacity = 1;
  /*vypnutí tlačítek*/
  var elements = document.getElementsByClassName('btn-dis');
  for (let i = 0; i < elements.length; i++) {
  elements[i].disabled = true;
  }

  document.getElementById('Btn4').disabled = false;

  if( value == question.answer){
      var onClick = document.getElementById("Result").style.opacity = 1;
      var Result = document.getElementById("Result").textContent = "To je správně !";
      s = s + 1;
      document.getElementById("Score").textContent = score + s;
    }
    
    else if(mistake == 3){
      var image_x = document.getElementById('life' + mistake);
      image_x.parentNode.removeChild(image_x); 
      var Result = document.getElementById("Result").textContent = "Konec hry!!";
      var elements = document.getElementById('Btn4').disabled = true;
    }

    else{var Result = document.getElementById("Result").textContent = "To je špatně !";
            
      //document.getElementById("life" + mistake);
      var image_x = document.getElementById('life' + mistake);
      image_x.parentNode.removeChild(image_x);
      mistake = mistake + 1;
    }

      console.log(Result)
}


