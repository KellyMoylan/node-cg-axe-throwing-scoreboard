const player1GameTotalsRep = nodecg.Replicant('player1GameTotal');
const player1WonRep = nodecg.Replicant('player1WonTotal');

const player2GameTotalsRep = nodecg.Replicant('player2GameTotal');
const player2WonRep = nodecg.Replicant('player2WonTotal');

const leftNameOverallRep = nodecg.Replicant('leftNameOverall');
const rightNameOverallRep = nodecg.Replicant('rightNameOverall');

const player1_round1El = document.getElementById('player1_round1');
const player1_round2El = document.getElementById('player1_round2');
const player1_round3El = document.getElementById('player1_round3');
const player1_round4El = document.getElementById('player1_round4');
const player1_round5El = document.getElementById('player1_round5');
const player1_round6El = document.getElementById('player1_round6');
const player1_round7El = document.getElementById('player1_round7');
const player1_round_totalEl = document.getElementById('player1_round_total');

const player2_round1El = document.getElementById('player2_round1');
const player2_round2El = document.getElementById('player2_round2');
const player2_round3El = document.getElementById('player2_round3');
const player2_round4El = document.getElementById('player2_round4');
const player2_round5El = document.getElementById('player2_round5');
const player2_round6El = document.getElementById('player2_round6');
const player2_round7El = document.getElementById('player2_round7');
const player2_round_totalEl = document.getElementById('player2_round_total');

const player1NameEl = document.getElementById('player1Name');
const player2NameEl = document.getElementById('player2Name');

const player1WinsRep = nodecg.Replicant('player1Wins', {defaultValue: 0});
const player2WinsRep = nodecg.Replicant('player2Wins', {defaultValue: 0});

const resetColoursRep = nodecg.Replicant('resetColours', {defaultValue:0});

const testDisplayRep = nodecg.Replicant('testDisplay');

const leftPlayerInfoOverallRep = nodecg.Replicant('leftPlayerInfoOverall');
const rightPlayerInfoOverallRep = nodecg.Replicant('rightPlayerInfoOverall');
const leftClubLogoEl = document.getElementById('player1Logo');
const rightClubLogoEl = document.getElementById('player2Logo');
const leftFlagEl = document.getElementById('player1Flag');
const rightFlagEl = document.getElementById('player2Flag');


leftPlayerInfoOverallRep.on('change', (newVal) => {
    if (newVal == ",,,,"){
        leftClubLogoEl.src = "";
        leftFlagEl.src = "";
        player1NameEl.innerHTML = "";
    }
    else{
        leftClubLogoEl.src = "img/clubs/" + newVal.split(",")[2] + ".svg";
        leftFlagEl.src = "img/flags/" + newVal.split(",")[3] + ".svg";
        player1NameEl.innerHTML = newVal.split(",")[0];
    }
    
})

rightPlayerInfoOverallRep.on('change', (newVal) => {
    if (newVal == ",,,,"){
        rightClubLogoEl.src = "";
        rightFlagEl.src = "";
        player2NameEl.innerHTML = "";
    }
    else{
        rightClubLogoEl.src = "img/clubs/" + newVal.split(",")[2] + ".svg";
        rightFlagEl.src = "img/flags/" + newVal.split(",")[3] + ".svg";
        player2NameEl.innerHTML = newVal.split(",")[0];
    }
})

player1GameTotalsRep.on('change', (newVal) => {
    player1_round1El.innerHTML = player1GameTotalsRep.value[0];
    player1_round2El.innerHTML = player1GameTotalsRep.value[1];
    player1_round3El.innerHTML = player1GameTotalsRep.value[2];
    player1_round4El.innerHTML = player1GameTotalsRep.value[3];
    player1_round5El.innerHTML = player1GameTotalsRep.value[4];
    player1_round6El.innerHTML = player1GameTotalsRep.value[5];
    player1_round7El.innerHTML = player1GameTotalsRep.value[6];
})

player2GameTotalsRep.on('change', (newVal) => {
    player2_round1El.innerHTML = player2GameTotalsRep.value[0];
    player2_round2El.innerHTML = player2GameTotalsRep.value[1];
    player2_round3El.innerHTML = player2GameTotalsRep.value[2];
    player2_round4El.innerHTML = player2GameTotalsRep.value[3];
    player2_round5El.innerHTML = player2GameTotalsRep.value[4];
    player2_round6El.innerHTML = player2GameTotalsRep.value[5];
    player2_round7El.innerHTML = player2GameTotalsRep.value[6];
})

player1WonRep.on('change', (newVal) => {
    player1_round_totalEl.innerHTML = player1WonRep.value;
})

player2WonRep.on('change', (newVal) => {
    player2_round_totalEl.innerHTML = player2WonRep.value;
})

player1WinsRep.on('change', (newVal) => {
	// testDisplayRep.value = newVal;
    switch(newVal){
        case 1:
            player1_round1El.style.background = "#39bd5c";
            break;
        case 2:
            player1_round2El.style.background = "#39bd5c";
            break;
        case 3:
            player1_round3El.style.background = "#39bd5c";
            break;
        case 4:
            player1_round4El.style.background = "#39bd5c";
            break;
        case 5:
            player1_round5El.style.background = "#39bd5c";
            break;
        case 6:
            player1_round6El.style.background = "#39bd5c";
            break;
        case 7:
            player1_round7El.style.background = "#39bd5c";
            break;
    }
})

player2WinsRep.on('change', (newVal) => {
	// testDisplayRep.value = newVal;
    switch(newVal){
        case 1:
            player2_round1El.style.background = "#39bd5c";
            break;
        case 2:
            player2_round2El.style.background = "#39bd5c";
            break;
        case 3:
            player2_round3El.style.background = "#39bd5c";
            break;
        case 4:
            player2_round4El.style.background = "#39bd5c";
            break;
        case 5:
            player2_round5El.style.background = "#39bd5c";
            break;
        case 6:
            player2_round6El.style.background = "#39bd5c";
            break;
        case 7:
            player2_round7El.style.background = "#39bd5c";
            break;
    }
})

resetColoursRep.on('change', (newVal) => {
	player1_round1El.style.background = "#4b5884";
	player1_round2El.style.background = "#4b5884";
	player1_round3El.style.background = "#4b5884";
	player1_round4El.style.background = "#4b5884";
	player1_round5El.style.background = "#4b5884";
	player1_round6El.style.background = "#4b5884";
	player1_round7El.style.background = "#4b5884";
	player2_round1El.style.background = "#4b5884";
	player2_round2El.style.background = "#4b5884";
	player2_round3El.style.background = "#4b5884";
	player2_round4El.style.background = "#4b5884";
	player2_round5El.style.background = "#4b5884";
	player2_round6El.style.background = "#4b5884";
	player2_round7El.style.background = "#4b5884";
})
//
// nodecg.listenFor('resetColours', (newVal) =>{
// 	player1_round1El.style.background = "#4b5884";
// 	player1_round2El.style.background = "#4b5884";
// 	player1_round3El.style.background = "#4b5884";
// 	player1_round4El.style.background = "#4b5884";
// 	player1_round5El.style.background = "#4b5884";
// 	player1_round6El.style.background = "#4b5884";
// 	player1_round7El.style.background = "#4b5884";
// 	player2_round1El.style.background = "#4b5884";
// 	player2_round2El.style.background = "#4b5884";
// 	player2_round3El.style.background = "#4b5884";
// 	player2_round4El.style.background = "#4b5884";
// 	player2_round5El.style.background = "#4b5884";
// 	player2_round6El.style.background = "#4b5884";
// 	player2_round7El.style.background = "#4b5884";
// })

// leftNameOverallRep.on('change', (newVal) => {
// 	player1NameEl.innerHTML = newVal;
// })

// rightNameOverallRep.on('change', (newVal) => {
// 	player2NameEl.innerHTML = newVal;
// })
