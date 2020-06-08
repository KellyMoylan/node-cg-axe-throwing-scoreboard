const player1_throw1Rep = nodecg.Replicant('player1_throw1');
const player1_throw2Rep = nodecg.Replicant('player1_throw2');
const player1_throw3Rep = nodecg.Replicant('player1_throw3');
const player1_throw4Rep = nodecg.Replicant('player1_throw4');
const player1_throw5Rep = nodecg.Replicant('player1_throw5');
const player1_totalRep = nodecg.Replicant('player1_total');

const player1BigAxeThrowRep = nodecg.Replicant('player1BigAxeThrow');

const player1_throw1El = document.getElementById('player1_throw1');
const player1_throw2El = document.getElementById('player1_throw2');
const player1_throw3El = document.getElementById('player1_throw3');
const player1_throw4El = document.getElementById('player1_throw4');
const player1_throw5El = document.getElementById('player1_throw5');
const player1_totalEl = document.getElementById('player1_total');

const player1BigAxeThrow1El = document.getElementById('player1BigAxeThrow1');
const player1BigAxeThrow2El = document.getElementById('player1BigAxeThrow2');
const player1BigAxeThrow3El = document.getElementById('player1BigAxeThrow3');

player1_throw1Rep.on('change', (newVal) => {
	player1_throw1El.innerHTML = newVal;
})

player1_throw2Rep.on('change', (newVal) => {
    player1_throw2El.innerHTML = newVal;
})

player1_throw3Rep.on('change', (newVal) => {
    player1_throw3El.innerHTML = newVal;
})

player1_throw4Rep.on('change', (newVal) => {
    player1_throw4El.innerHTML = newVal;
})

player1_throw5Rep.on('change', (newVal) => {
    player1_throw5El.innerHTML = newVal;
})

player1_totalRep.on('change', (newVal) => {
    player1_totalEl.innerHTML = newVal;
})

player1BigAxeThrowRep.on('change', (newVal) =>{
	if (newVal.length === 0){
		player1BigAxeThrow1El.innerHTML = '-';
		player1BigAxeThrow2El.innerHTML = '-';
		player1BigAxeThrow3El.innerHTML = '-';
	}
	else if(newVal.length === 1){
		player1BigAxeThrow3El.innerHTML = newVal[0];
	}
	else if(newVal.length === 2){
		player1BigAxeThrow2El.innerHTML = newVal[0];
		player1BigAxeThrow3El.innerHTML = newVal[1];
	}
	else{
		player1BigAxeThrow1El.innerHTML = newVal[newVal.length-3];
		player1BigAxeThrow2El.innerHTML = newVal[newVal.length-2];
		player1BigAxeThrow3El.innerHTML = newVal[newVal.length-1];
	}
})
