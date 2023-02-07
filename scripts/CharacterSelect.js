const characterSelectPage = document.getElementById("game-area");
const GamePlayPage = document.getElementById("game-area1");

//in characterSelectPage to get access of character image
const zodGilla = document.getElementById("characterImageZodGilla")
const dingDong = document.getElementById("characterImageDingDong")

//In File GamePlayPage to change game character on user choice
const player1Character = document.getElementById("player1Character");
const player2Character = document.getElementById("player2Character");

//in characterSelectPage to get src of character image
const  zodGillaImage = zodGilla.src;
const  dingDongImage = dingDong.src;

const player1Img = document.getElementById("player1CharacterImg");
const player2Img = document.getElementById("player2CharacterImg");

function passCharacter(character1 , character2){
   
    player1Img.innerHTML = `<img src="${character1} " alt="resources/player-one-gorilla.png" id="player1Character">`

    player2Img.innerHTML = `<img src="${character2} " alt="resources/player-two-dinosaur.png" id="player2Character">`
    console.log(character1);


    changeScreen();
}

function changeScreen(){
    characterSelectPage.innerHTML = GamePlayPage.innerHTML;
}





zodGilla.addEventListener('click' , ()=>{
    passCharacter(zodGillaImage , dingDongImage)
})

dingDong.addEventListener('click' , ()=>{
    passCharacter(dingDongImage , zodGillaImage)
    console.log("dindong oressed")
})







