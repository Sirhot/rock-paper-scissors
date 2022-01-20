//when user clicked one of the buttons,
//we should take the id of the button,
//


function whoWins(player,computer){

    //rock-> rock paper scissors 1->draw,0->lose,2->win
    //paper-> rock paper scissors 2,1,0 
    //scissors-> rock paper scissors 0,2,1
    let picks = [
        [1,0,2],
        [2,1,0], 
        [0,2,1]
    ];


    
    //picks[player][computer]
    //what will the result be?
    //if statements and write to screen
    
    if(picks[player][computer] == 0){
        //lose
        document.getElementById("result").innerHTML = "HOOOMAN LOST!!!";
        compCount++;
        document.getElementById("compCount").innerHTML = compCount;
    }
    else if(picks[player][computer] == 1){
        //draw
        document.getElementById("result").innerHTML = "DRAW!!!";
    }
    else if(picks[player][computer] == 2){
        //win
        document.getElementById("result").innerHTML = "HOOOMAN WON!!!";
        playerCount++;
        document.getElementById("playerCount").innerHTML = playerCount;
    }
    
    
}

function round(playerSelection){


    
    let computerSelection = Math.floor(Math.random()*3);
    
    for(var i=0; i<3; i++){

        if(playerSelection == 0){
            //control
            document.getElementById("player").innerHTML='<img style="width: 110px; height: 110px;" src="images/Frame 4.jpg" alt="rock"><p>Rock</p>';
            
        }
        else if(playerSelection == 1){
            //control
            document.getElementById("player").innerHTML='<img style="width: 110px; height: 110px;" src="images/Frame 3.jpg" alt="paper"><p>Paper</p>';
            
        }
        else if(playerSelection == 2){
            //control
            document.getElementById("player").innerHTML='<img style="width: 110px; height: 110px;" src="images/Frame 2.jpg" alt="scissors"><p>Scissors</p>';
            
        }
        
        if(computerSelection == 0){
            //control
            document.getElementById("computer").innerHTML='<img style="width: 110px; height: 110px;" src="images/Frame 4.jpg" alt="rock"><p>Rock</p>';
            
        }
        else if(computerSelection == 1){
            //control
            document.getElementById("computer").innerHTML='<img style="width: 110px; height: 110px;" src="images/Frame 3.jpg" alt="paper"><p>Paper</p>';
            
        }
        else if(computerSelection == 2){
            //control
            document.getElementById("computer").innerHTML='<img style="width: 110px; height: 110px;" src="images/Frame 2.jpg" alt="scissors"><p>Scissors</p>';
            
        }
        
    }
    
    whoWins(playerSelection,computerSelection);
    
    //result
    if(compCount == 5){
    
        document.getElementById("result").innerHTML = "COMPUTER WON THE GAME";
        
        compCount = 0;
        playerCount = 0;
        document.getElementById("compCount").innerHTML = compCount;
        document.getElementById("playerCount").innerHTML = playerCount;
    }
    if(playerCount == 5){
        
        document.getElementById("result").innerHTML = "HOOOMANN WON THE GAME";
        
        compCount = 0;
        playerCount = 0;
        document.getElementById("compCount").innerHTML = compCount;
        document.getElementById("playerCount").innerHTML = playerCount;
    }
}

var playerCount = 0;
var compCount = 0;
