



const player1HealthBar = document.getElementById("player1HealthBar");
const player2HealthBar = document.getElementById("player2HealthBar");

const player1SpecialAttackBar = document.getElementById("player1SpecialAttack");
const player2SpecialAttackBar = document.getElementById("player2SpecialAttack");
player1HealthBar.value = 100;
player2HealthBar.value = 100;

var HumanAttackDone = 0;
var ComputerAttackDone = 0;

var SpecialAttackLoaderHuman = 0;
var SpecialAttackLoaderComputer = 0; 


var SpecialAttackUsedHuman = 0;
var SpecialAttackUsedComputer = 0;

var HealUsedHuman = 0;
var HealUsedComputer = 0;

var humanDataUpdate = 0;
var ComputerDataUpdate = 0;

let player1Details = document.getElementById("player1Name");
let player2Details = document.getElementById("player2Name");

const HumanData = [];
const ComputerData = [];

let HumanDetails = {
    health: 0,
    specialAttackUsed: 0,
    HealsUsed: 0 
}

let computerDetails = {
    health: 0,
    specialAttackUsed: 0,
    HealsUsed: 0
}

function humanDetailsUpdater() {
    HumanData[humanDataUpdate++] = HumanDetails;
    console.log(HumanData);
}

function computerDetailsUpdater() {
    ComputerData[ComputerDataUpdate++] = computerDetails;
    console.log(ComputerData);
}


let FirstTurnPicker = Math.ceil(Math.random() * 2);

TurnPicker(FirstTurnPicker);

function TurnPicker(FirstTurnPicker , otherNumber) {
    if (FirstTurnPicker === 1 || otherNumber === 1) {
        
        window.setTimeout(humanAttack , 2000)  
        
        FirstTurnPicker = 0;
    }
    else if(FirstTurnPicker === 2 || otherNumber === 2) {
        
        window.setTimeout(computerAttack , 2000)  
        
        FirstTurnPicker = 0;
    }
}

function changeColor(playerName){

    if(playerName === "Computer"){
        player2Details.style.color = 'red';
        player1Details.style.color = 'white';
    }
    else if(playerName === "Human"){
        player2Details.style.color = 'white';
        player1Details.style.color = 'red';
    }

}


function humanAttack() {

    changeColor("Human");
    window.addEventListener('keydown', myfunction);
    function myfunction(event){


        if (event.key === "a" || event.key === "A") {
            console.log("first attack human")
            let attackValue = Math.random() * 8;

            player2HealthBar.value -= attackValue;
            player1SpecialAttackBar.value += 10;
            SpecialAttackLoaderHuman++;
            event.key = "";
            TurnPicker(2,2);

        }
        else if (event.key === "d" || event.key === "D") {

            if(SpecialAttackLoaderHuman >= 6){
            let SpecialattackValue = (Math.random() * 9) + 11;
            player2HealthBar.value -= SpecialattackValue;

            player1SpecialAttackBar.value -= SpecialAttackUsedHuman *10;
            HumanAttackDone++;
            SpecialAttackUsedHuman++;
            SpecialAttackUsedHuman -= 6;
            event.key = "";
            TurnPicker(2,2);
        }
        else{
            alert("Special Attack not Ready")
            event.key = "";
            humanAttack();
         }
           
        }
        else if (event.key === "h" || event.key === "H") {
            console.log("third attack human")
            if (HumanAttackDone < 3 ) {
                event.key = "";
                alert("Human Heal Not Ready.......");

            }
            else {
                event.key
                player1HealthBar.value += 20;
                HealUsedHuman++;
                TurnPicker(2,2);      
            }
        }
        
        decideWinner(player1HealthBar.value , player2HealthBar.value)    
        logInfo('human' , player1HealthBar.value , SpecialAttackUsedHuman , HealUsedHuman);
        window.removeEventListener("keyup" , myfunction)
    }

    
}

function computerAttack() {
    changeColor("Computer");
    let attackDecide = Math.ceil(Math.random() * 3);

    if (attackDecide === 1) {
        let attackValue = Math.random() * 8;
        player1HealthBar.value -= attackValue;

        player2SpecialAttackBar.value += 10;
        SpecialAttackLoaderComputer++;
        
    TurnPicker(1,1);
    logInfo('computer' , player2HealthBar.value , SpecialAttackUsedComputer , HealUsedComputer);


    }

    else if (attackDecide === 2) {

        if( SpecialAttackLoaderComputer >=6){
            let SpecialattackValue = (Math.random() * 9) + 11;

            player1HealthBar.value -= SpecialattackValue;

            player2SpecialAttackBar.value = 0;
            ComputerAttackDone++;
            SpecialAttackUsedComputer++;
            TurnPicker(1,1);
            logInfo('computer' , player2HealthBar.value , SpecialAttackUsedComputer , HealUsedComputer);
        }
        else{
            computerAttack();
        }
        

    }
    else if (attackDecide === 3) {
        if (ComputerAttackDone >= 3) {
            player2HealthBar.value += 20;
            
            HealUsedComputer++;
            TurnPicker(1,1);
            logInfo('computer' , player2HealthBar.value , SpecialAttackUsedComputer , HealUsedComputer);
        }
        else {
            computerAttack();
        }
    }
    decideWinner(player1HealthBar.value , player2HealthBar.value);
}

function decideWinner(player1Health , player2Health){
    if(player1Health > 0 && (player2Health === 0 || player2Health < 0)){
        alert("Humans Have Killed the Monster")
    }
    
    else if(player2Health > 0 && (player1Health === 0 || player1Health < 0)){
        alert("Comptuer Has Taken over Earth")
    }
}

function logInfo(playerName , LastHealth , TotalSpecialAttacksUsed , TotalHealsUsed){
    if(playerName === "human"){
        HumanDetails.health = LastHealth,
        HumanDetails.specialAttackUsed = TotalSpecialAttacksUsed;
        HumanDetails.HealsUsed = TotalHealsUsed;
        humanDetailsUpdater();
    }
    else if(playerName === "computer"){
        computerDetails.health = LastHealth,
        computerDetails.specialAttackUsed = TotalSpecialAttacksUsed;
        computerDetails.HealsUsed = TotalHealsUsed;
        computerDetailsUpdater();
    }
}










