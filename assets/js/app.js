const cloud = document.querySelector(".bgd-container")
const cloudBet = document.querySelector("#cloudBetLink")

cloud.addEventListener("click", function(){
    //firstAd();
})

cloudBet.addEventListener("click", function(){
    cloudBetFunct();
})

function firstAd(){
    window.open('https://gamdom.com/r/cryptobett', '_blank');
}

function cloudBetFunct(){
    window.open('https://cloudbet.com/en/bitcoin-bonus?af_token=988130567e1ffa3883f9e2c8e86fa82f', '_blank');
}