const player1GameTotalsRep = nodecg.Replicant('player1GameTotal', {defaultValue: ["-","-","-","-","-","-","-"]});
const player1WonRep = nodecg.Replicant('player1WonTotal', {defaultValue: 0});
const player1_totalRep = nodecg.Replicant('player1_total');

const player2GameTotalsRep = nodecg.Replicant('player2GameTotal', {defaultValue: ["-","-","-","-","-","-","-"]});
const player2WonRep = nodecg.Replicant('player2WonTotal', {defaultValue: 0});
const player2_totalRep = nodecg.Replicant('player2_total');

const leftNameRep = nodecg.Replicant('leftName');
const rightNameRep = nodecg.Replicant('rightName');
const rightLocationRep = nodecg.Replicant('rightLocation');
const leftLocationRep = nodecg.Replicant('leftLocation');
const leftNameOverallRep = nodecg.Replicant('leftNameOverall');
const rightNameOverallRep = nodecg.Replicant('rightNameOverall');

const resetPlayersLeftRep = nodecg.Replicant('resetPlayersLeft', {defaultValue:0});
const resetPlayersRightRep = nodecg.Replicant('resetPlayersRight', {defaultValue:0});


const player1Game1TotalEl = document.getElementById('player1Game1Total');
const player1Game2TotalEl = document.getElementById('player1Game2Total');
const player1Game3TotalEl = document.getElementById('player1Game3Total');
const player1Game4TotalEl = document.getElementById('player1Game4Total');
const player1Game5TotalEl = document.getElementById('player1Game5Total');
const player1Game6TotalEl = document.getElementById('player1Game6Total');
const player1Game7TotalEl = document.getElementById('player1Game7Total');
const player1WonTotalEl = document.getElementById('player1WonTotal');

const player2Game1TotalEl = document.getElementById('player2Game1Total');
const player2Game2TotalEl = document.getElementById('player2Game2Total');
const player2Game3TotalEl = document.getElementById('player2Game3Total');
const player2Game4TotalEl = document.getElementById('player2Game4Total');
const player2Game5TotalEl = document.getElementById('player2Game5Total');
const player2Game6TotalEl = document.getElementById('player2Game6Total');
const player2Game7TotalEl = document.getElementById('player2Game7Total');
const player2WonTotalEl = document.getElementById('player2WonTotal');

const player1WinsRep = nodecg.Replicant('player1Wins', {persistent: false});
const player2WinsRep = nodecg.Replicant('player2Wins', {persistent: false});

const resetColoursRep = nodecg.Replicant('resetColours', {defaultValue:0})

const leftClubLogoRep = nodecg.Replicant('leftClubLogo');
const rightClubLogoRep = nodecg.Replicant('rightClubLogo');
const leftPlayerInfoOverallRep = nodecg.Replicant('leftPlayerInfoOverall');
const rightPlayerInfoOverallRep = nodecg.Replicant('rightPlayerInfoOverall');
var currentRound = 0;

function lock_round(){
    if (player1_totalRep.value != player2_totalRep.value){

        if (currentRound % 2 == 0){
            player1GameTotalsRep.value[currentRound] = player1_totalRep.value;
            player2GameTotalsRep.value[currentRound] = player2_totalRep.value;

            currentRound = currentRound + 1;

            if (player1_totalRep.value > player2_totalRep.value){
                player1WonRep.value = player1WonRep.value + 1;
                player1WinsRep.value = currentRound;
            }
            else{
                player2WonRep.value = player2WonRep.value + 1;
                player2WinsRep.value = currentRound;
            }
            var tempInfo;
			tempInfo = leftClubLogoRep.value;
			leftClubLogoRep.value = rightClubLogoRep.value;
			rightClubLogoRep.value = tempInfo;

        }
        else{
            player1GameTotalsRep.value[currentRound] = player2_totalRep.value;
            player2GameTotalsRep.value[currentRound] = player1_totalRep.value;

            currentRound = currentRound + 1;

            if (player1_totalRep.value < player2_totalRep.value){
                player1WonRep.value = player1WonRep.value + 1;
                player1WinsRep.value = currentRound;
            }
            else{
                player2WonRep.value = player2WonRep.value + 1;
                player2WinsRep.value = currentRound;
            }
            var tempInfo;
            tempInfo = leftClubLogoRep.value;
            leftClubLogoRep.value = rightClubLogoRep.value;
            rightClubLogoRep.value = tempInfo;
        }
    }
}

player1GameTotalsRep.on('change', (newVal) => {
    player1Game1TotalEl.innerHTML = player1GameTotalsRep.value[0];
    player1Game2TotalEl.innerHTML = player1GameTotalsRep.value[1];
    player1Game3TotalEl.innerHTML = player1GameTotalsRep.value[2];
    player1Game4TotalEl.innerHTML = player1GameTotalsRep.value[3];
    player1Game5TotalEl.innerHTML = player1GameTotalsRep.value[4];
    player1Game6TotalEl.innerHTML = player1GameTotalsRep.value[5];
    player1Game7TotalEl.innerHTML = player1GameTotalsRep.value[6];
})

player2GameTotalsRep.on('change', (newVal) => {
    player2Game1TotalEl.innerHTML = player2GameTotalsRep.value[0];
    player2Game2TotalEl.innerHTML = player2GameTotalsRep.value[1];
    player2Game3TotalEl.innerHTML = player2GameTotalsRep.value[2];
    player2Game4TotalEl.innerHTML = player2GameTotalsRep.value[3];
    player2Game5TotalEl.innerHTML = player2GameTotalsRep.value[4];
    player2Game6TotalEl.innerHTML = player2GameTotalsRep.value[5];
    player2Game7TotalEl.innerHTML = player2GameTotalsRep.value[6];
})

player1WonRep.on('change', (newVal) => {
    player1WonTotalEl.innerHTML = player1WonRep.value;
	resetPlayersLeftRep.value = resetPlayersLeftRep.value + 1;
	resetPlayersRightRep.value = resetPlayersRightRep.value + 1;
})

player2WonRep.on('change', (newVal) => {
    player2WonTotalEl.innerHTML = player2WonRep.value;
	resetPlayersLeftRep.value = resetPlayersLeftRep.value + 1;
	resetPlayersRightRep.value = resetPlayersRightRep.value + 1;
})

function reset(){

    var i;
    for (i = 0; i < 7; i++){
        player1GameTotalsRep.value[i] = "-";
        player2GameTotalsRep.value[i] = "-";
    }

    player1WonRep.value = 0;
    player2WonRep.value = 0;
	player1WinsRep.value = 0;
	player2WinsRep.value = 0;

    currentRound = 0;

	leftNameRep.value = "";
	rightNameRep.value = "";
	leftLocationRep.value = "";
	rightLocationRep.value = "";

	leftNameOverallRep.value = "";
	rightNameOverallRep.value = "";

	resetColoursRep.value = resetColoursRep.value + 1;
	resetPlayersLeftRep.value = resetPlayersLeftRep.value + 1;
	resetPlayersRightRep.value = resetPlayersRightRep.value + 1;

    leftClubLogoRep.value = ",,,,";
    rightClubLogoRep.value = ",,,,";
    leftPlayerInfoOverallRep.value = ",,,,";
    rightPlayerInfoOverallRep.value = ",,,,";

}
