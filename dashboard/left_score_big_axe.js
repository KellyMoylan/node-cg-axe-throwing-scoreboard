const player1BigAxeThrowRep = nodecg.Replicant('player1BigAxeThrow', {defaultValue: [], persistent: false});
const player1_totalRep = nodecg.Replicant('player1_total');
const resetPlayersLeftRep = nodecg.Replicant('resetPlayersLeft', {defaultValue:0});

const player1ThrowDisEl = document.getElementById('player1ThrowDisplay');

let throwArray = [];

function bigAxeThrow(value){
	player1ThrowDisEl.innerHTML = value;
}

function lockThrow(){
	if(['0','1','3','5','7','D'].includes(player1ThrowDisEl.innerText)) {
		throwArray.push(player1ThrowDisEl.innerText);
		player1BigAxeThrowRep.value = Array.from(throwArray);
		if(!isNaN(player1ThrowDisEl.innerText)){
			player1_totalRep.value = player1_totalRep.value + parseInt(player1ThrowDisEl.innerText);
		}
		player1ThrowDisEl.innerHTML = '-';
	}
}

function sumScore(scoreArray){
	let total = 0;

	if(scoreArray.length === 1){
		if (!isNaN(scoreArray[0])){
			total = parseInt(scoreArray[0]);
		}
	}
	else{
		for (var i = 0; i < scoreArray.length; i++){
			if(!isNaN(scoreArray[i])){
				total += parseInt(scoreArray[i]);
			}
		}
	}
	return total;
}

resetPlayersLeftRep.on('change', (newVal) => {
	throwArray = [];
	player1BigAxeThrowRep.value = [];
})
