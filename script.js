let scoreStr = localStorage.getItem('score');
console.log(scoreStr);
let score = JSON.parse(scoreStr) || {
    win : 0,
    loss : 0,
    tie : 0,
}

function generateComputerChooise(){
    let random = Math.random() * 3;
    let computerChoise;
         if(random > 0 && random <= 1){
             computerChoise = 'Bat';
        }else if(random > 1 && random <= 2){
             computerChoise = 'Ball';
        }else{
             computerChoise = 'Stump';
        }
        return computerChoise;

    }

    function getResult(userChoose,computerChoise){
        let result;
        if(computerChoise === userChoose){
            score.tie++;
        result = 'Tie';
        }else if(computerChoise === 'Bat' && userChoose === 'Stump'){
            score.win++;
        result = 'User Win';
        }else if(computerChoise === 'Stump' && userChoose === 'Bat'){
            score.loss++;
        result = 'Computer Won';
        }else if(computerChoise === 'Ball' && userChoose === 'Bat'){
            score.win++;
        result = 'User Win';
        }else if(computerChoise === 'Bat' && userChoose === 'Ball'){
            score.loss++;
        result = 'Computer Win';
        }else if(computerChoise === 'Ball' && userChoose === 'Stump'){
            score.loss++;
        result = 'Computer Win';
        }else if(computerChoise === 'Stump' && userChoose === 'Ball'){
            score.win++;
        result = 'User Win';
        }
        return result;
    }

    function printResult(userChoose, computerChoise, result){
        localStorage.setItem('score', JSON.stringify(score));

        document.querySelector('#user-b').innerHTML = userChoose ? `User choose ${userChoose}` : '' ;
        document.querySelector('#computer-b').innerText = computerChoise ? `Computer choose ${computerChoise}` : '' ;
        document.querySelector('#result').innerText = result || '' ;
        document.querySelector('#score').innerText = ` Your Score is
        Win =  ${score.win} Loss = ${score.loss} Tie = ${score.tie}`;
    } 

    function resetResult(){
        localStorage.clear();
        score.win = 0;
        score.loss = 0;
        score.tie = 0;

        printResult();

    }

