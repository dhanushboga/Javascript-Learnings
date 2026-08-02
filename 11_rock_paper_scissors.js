let score = JSON.parse(localStorage.getItem("score"));

    if(!score){
        score = {
            wins: 0,
            losses: 0,
            Tie: 0,
        };
    }

    updateScore();


    function playgame(playermove){

    const computerguess = pickComputerMove();
    let result = '';


    if(playermove === 'rock'){

       if(computerguess === 'rock'){
         
             result = 'Tie';
        }
           else if(computerguess === 'papers'){
                result = 'you lose';
        
        }
              else if(computerguess === 'scissors'){
                result = 'you win';
         
         }

     }

    else if(playermove === 'papers'){

        if(computerguess === 'rock'){

            result = 'you win';
        }
        else if(computerguess === 'papers'){
            result = 'Tie';
        
        }
        else if(computerguess === 'scissors'){
            result = 'you lose';
         
        }
}

    else if(playermove === 'scissors'){

        if(computerguess === 'rock'){

            result = 'you lose';
        }

        else if(computerguess === 'papers'){

            result = 'you win';
        
        }
        else if(computerguess === 'scissors'){
            result = 'Tie'; 
    }
}

    if(result === 'you win'){
        score.wins =  score.wins + 1;
     }
    else if(result === 'you lose'){

        score.losses +=1;
    }
    else if(result === 'Tie'){

        score.Tie +=1;
    }

    localStorage.setItem("score",JSON.stringify(score))
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `you <img class="move-img"src="images/${playermove}-emoji.png"><img> <img class="move-img" src="images/${computerguess}-emoji.png"></img> Computer`;
    updateScore();
}

function updateScore(){
    document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.Tie}`
}

    

   function pickComputerMove(){
       let computerguess = '';
        const randomnumber = Math.random(); 
    
    if (randomnumber >=0 && randomnumber <= 1/3){
        computerguess ='rock';
    }
    else if(randomnumber >=1/3 && randomnumber <= 2/3){
        computerguess = 'papers';
    }
    else if(randomnumber >=2/3 && randomnumber <= 1){
        computerguess = 'scissors';
    }
     return computerguess;
   }