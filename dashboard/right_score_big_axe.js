const player2BigAxeThrowRep = nodecg.Replicant('player2BigAxeThrow', {defaultValue: [], persistent: false});
const player2_totalRep = nodecg.Replicant('player2_total');
const resetPlayersRightRep = nodecg.Replicant('resetPlayersRight', {defaultValue:0});

const player2ThrowDisEl = document.getElementById('player2ThrowDisplay');

let throwArray = [];

function bigAxeThrow(value){
	player2ThrowDisEl.innerHTML = value;
}

function lockThrow(){
	if(['0','1','3','5','7','D'].includes(player2ThrowDisEl.innerText)) {
		throwArray.push(player2ThrowDisEl.innerText);
		player2BigAxeThrowRep.value = Array.from(throwArray);
		if(!isNaN(player2ThrowDisEl.innerText)){
			player2_totalRep.value = player2_totalRep.value + parseInt(player2ThrowDisEl.innerText);
		}
		player2ThrowDisEl.innerHTML = '-';
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

resetPlayersRightRep.on('change', (newVal) => {
	throwArray = [];
	player2BigAxeThrowRep.value = [];
})
