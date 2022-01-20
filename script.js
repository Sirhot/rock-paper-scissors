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
        document.getElementById("result").innerHTML = "Player LOSE!!!";
    }
    else if(picks[player][computer] == 1){
        //draw
        document.getElementById("result").innerHTML = "DRAW!!!";
    }
    else if(picks[player][computer] == 2){
        //win
        document.getElementById("result").innerHTML = "Player WON!!!";
    }

}

function round(playerSelection){
    
    let computerSelection = Math.floor(Math.random()*3);

    for(var i=0; i<3; i++){

        if(computerSelection == 0){
            //control
            document.getElementById("computer").innerHTML='<img style="width: 150px; height: 150px;" src="https://media.istockphoto.com/photos/stone-pebble-gray-picture-id1288973456?b=1&k=20&m=1288973456&s=170667a&w=0&h=GBGgp4yrZv4ooDBws8yHF24sJ3rkEpObYsBWpVNKFT8=" alt="rock"><p>Rock</p>';
             
        }
        else if(computerSelection == 1){
            //control
            document.getElementById("computer").innerHTML='<img style="width: 150px; height: 150px;" src="https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg?size=626&ext=jpg" alt="paper"><p>Paper</p>';
             
        }
        else if(computerSelection == 2){
            //control
            document.getElementById("computer").innerHTML='<img style="width: 150px; height: 150px;" src="https://upload.wikimedia.org/wikipedia/commons/7/76/Pair_of_scissors_with_black_handle%2C_2015-06-07.jpg" alt="scissors"><p>Scissors</p>';
             
        }
        
    }
    
    whoWins(playerSelection,computerSelection);

}


