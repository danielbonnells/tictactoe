var letter;
var otherLetter;
var letterIsChosen = true;
var userTurn; 
var computerTurn = false;

$(".letter").click(function(){
  
  
  if(letterIsChosen == true){
  letterIsChosen = false;
  userTurn = true;
  letter = $(this).html(); 

  if(letter == "X"){
  otherLetter = "O";
} else if (letter = "O"){
  otherLetter = "X";
}
  }  
});


      
      $("#A1").on("click", function(){
        if($(this).html() == "" && userTurn === true){callUpdate("#A1");}
      });
      $("#A2").on("click", function(){
        if($(this).html() == "" && userTurn === true){callUpdate("#A2");}
      });
      $("#A3").on("click", function(){
        if($(this).html() == "" && userTurn === true){callUpdate("#A3");}
      });
      $("#B1").on("click", function(){
        if($(this).html() == "" && userTurn === true){callUpdate("#B1");}
      });
      $("#B2").on("click", function(){
        if($(this).html() == "" && userTurn === true){callUpdate("#B2");}
      });
      $("#B3").on("click", function(){
        if($(this).html() == "" && userTurn === true){callUpdate("#B3");}
      });
      $("#C1").on("click", function(){
        if($(this).html() == "" && userTurn === true){callUpdate("#C1");}
      });
      $("#C2").on("click", function(){
        if($(this).html() == "" && userTurn === true){callUpdate("#C2");}
      });
      $("#C3").on("click", function(){
        if($(this).html() == "" && userTurn === true){callUpdate("#C3");}
      });
     
var index;    
var anArray = [];
function callUpdate(id){

  $("#message").html("");
  $(id).html(letter);
  idToIndex(id);
  objectArray[index].useability = "user";
  anArray.push(id);
  userTurn = false;
  computerTurn = true;
  goComputer();
 
}

function idToIndex(id){
  
  for(var i = 0; i<objectArray.length; i++){
    
    if(objectArray[i].name == id){
      
      index = i;
      console.log( index);
      break;
    }
    
  }    
   
}



function goComputer(){
 
  computerTurn = false;
  
if(userTurn == false){
  
        userTurn = true;

  
  
if(anArray.length < 9){
  for(var i = 0; i < 100; i++){
     var j = (Math.random()*10).toFixed();
        if (j == 9 || j == 10){
            j = 4;
        }
    console.log(j);
console.log(objectArray[j].useability);
        if(objectArray[j].useability == "free"){

          $(objectArray[j].name).html(otherLetter);
          objectArray[j].useability = "computer";
          console.log("computer's spot is " +j);
          anArray.push(objectArray[j].name);
          break;
        }
         
  } 
}  

    if(anArray.length == 9){
    winner("draw");
    console.log("array full");
  }
  
  if($(objectArray[0].name).html() == "X" && $(objectArray[1].name).html() == "X" && $(objectArray[2].name).html() == "X"){
    
   
      winner("X");
    
    console.log( "X wins");
  }
  
  else if($(objectArray[0].name).html() == "O" && $(objectArray[1].name).html() == "O" && $(objectArray[2].name).html() == "O"){
   
      winner("O");
   
    console.log( "O wins");
    
  } else if($(objectArray[0].name).html() == "X" && $(objectArray[3].name).html() == "X" && $(objectArray[6].name).html() == "X"){
  
      winner("X");
   
    console.log( "X wins");
    
  } else if($(objectArray[0].name).html() == "O" && $(objectArray[3].name).html() == "O" && $(objectArray[6].name).html() == "O"){
     
      winner("O");
   
    console.log( "O wins");
    
  } else if($(objectArray[0].name).html() == "X" && $(objectArray[4].name).html() == "X" && $(objectArray[8].name).html() == "X"){
   
      winner("X");
    
    console.log( "X wins");
    
  } else if($(objectArray[0].name).html() == "O" && $(objectArray[4].name).html() == "O" && $(objectArray[8].name).html() == "O"){
     
      winner("O");
    
    console.log( "O wins");
    
  } else if($(objectArray[1].name).html() == "X" && $(objectArray[4].name).html() == "X" && $(objectArray[7].name).html() == "X"){
  
      winner("X");
    
    console.log( "X wins");
    
  } else if($(objectArray[1].name).html() == "O" && $(objectArray[4].name).html() == "O" && $(objectArray[7].name).html() == "O"){
    
      winner("O");
    
    console.log( "O wins");
    
  } else if($(objectArray[2].name).html() == "X" && $(objectArray[5].name).html() == "X" && $(objectArray[8].name).html() == "X"){
    
      winner("X");
    
    console.log( "X wins");
    
  } else if($(objectArray[2].name).html() == "O" && $(objectArray[5].name).html() == "O" && $(objectArray[8].name).html() == "O"){
    
      winner("O");
    
    console.log( "O wins");
    
  } else if($(objectArray[2].name).html() == "O" && $(objectArray[4].name).html() == "O" && $(objectArray[6].name).html() == "O"){
    
      winner("O");
    
    console.log( "O wins");
    
  } else if($(objectArray[2].name).html() == "X" && $(objectArray[4].name).html() == "X" && $(objectArray[6].name).html() == "X"){
    
      winner("X");
    
    console.log( "X wins");
    
  }  else if($(objectArray[3].name).html() == "X" && $(objectArray[4].name).html() == "X" && $(objectArray[5].name).html() == "X"){
    
      winner("X");
    
    console.log( "X wins");
    
  } else if($(objectArray[3].name).html() == "O" && $(objectArray[4].name).html() == "O" && $(objectArray[5].name).html() == "O"){
    
      winner("O");
    
    console.log( "O wins");
    
  }  else if($(objectArray[6].name).html() == "X" && $(objectArray[7].name).html() == "X" && $(objectArray[8].name).html() == "X"){
    
      winner("X");
    
    console.log( "X wins");
    
  } else if($(objectArray[6].name).html() == "O" && $(objectArray[7].name).html() == "O" && $(objectArray[8].name).html() == "O"){
    
      winner("O");
    
    console.log( "O wins");
    
  } 
   
 
  }   
}



function winner(player){
  
  $(".boxes").css("pointer-events", "none");//disable click events
  setTimeout(function(){
    $(".boxes").html("");
    $(".boxes").css("pointer-events", "auto"); //enable click events 
   
  }, 3000);
  
  for(var i =0; i < objectArray.length; i++){
    objectArray[i].useability = "free";
    console.log(objectArray[i].name, objectArray[i].useability );
  }
  
  anArray = [];
  
  if(player == "draw"){
    $("#message").html("It's a Draw! Play again!");
  } else {
  $("#message").html("Player " + player + " won! Play again!");
  }
}
 


var objectArray = [
  {
    "name": "#A1",
    "type": "corner",
    "useability": "free"
  },
   {
    "name": "#A2",
    "type": "edge",
    "useability": "free" 
  },
   {
    "name": "#A3",
    "type": "corner",
    "useability": "free" 
  },
   {
    "name": "#B1",
    "type": "edge",
    "useability": "free" 
  },
   {
    "name": "#B2",
    "type": "center",
    "useability": "free" 
  },
   {
    "name": "#B3",
    "type": "edge",
    "useability": "free" 
  },
   {
    "name": "#C1",
    "type": "corner",
    "useability": "free" 
  },
   {
    "name": "#C2",
    "type": "edge",
    "useability": "free" 
  },
   {
    "name": "#C3",
    "type": "corner",
    "useability": "free" 
  }
]


// This is not very good code, I know. I hope to one day return as a more experienced developer and have a good chuckle. - Daniel Bonnells 03/22/17