const player2_throw1Rep = nodecg.Replicant('player2_throw1');
const player2_throw2Rep = nodecg.Replicant('player2_throw2');
const player2_throw3Rep = nodecg.Replicant('player2_throw3');
const player2_throw4Rep = nodecg.Replicant('player2_throw4');
const player2_throw5Rep = nodecg.Replicant('player2_throw5');
const player2_totalRep = nodecg.Replicant('player2_total');

const player2BigAxeThrowRep = nodecg.Replicant('player2BigAxeThrow');

const player2_throw1El = document.getElementById('player2_throw1');
const player2_throw2El = document.getElementById('player2_throw2');
const player2_throw3El = document.getElementById('player2_throw3');
const player2_throw4El = document.getElementById('player2_throw4');
const player2_throw5El = document.getElementById('player2_throw5');
const player2_totalEl = document.getElementById('player2_total');

const player2BigAxeThrow1El = document.getElementById('player2BigAxeThrow1');
const player2BigAxeThrow2El = document.getElementById('player2BigAxeThrow2');
const player2BigAxeThrow3El = document.getElementById('player2BigAxeThrow3');

player2_throw1Rep.on('change', (newVal) => {
    player2_throw1El.innerHTML = newVal;
})

player2_throw2Rep.on('change', (newVal) => {
    player2_throw2El.innerHTML = newVal;
})

player2_throw3Rep.on('change', (newVal) => {
    player2_throw3El.innerHTML = newVal;
})

player2_throw4Rep.on('change', (newVal) => {
    player2_throw4El.innerHTML = newVal;
})

player2_throw5Rep.on('change', (newVal) => {
    player2_throw5El.innerHTML = newVal;
})

player2_totalRep.on('change', (newVal) => {
    player2_totalEl.innerHTML = newVal;
})

player2BigAxeThrowRep.on('change', (newVal) =>{
	if (newVal.length === 0){
		player2BigAxeThrow1El.innerHTML = '-';
		player2BigAxeThrow2El.innerHTML = '-';
		player2BigAxeThrow3El.innerHTML = '-';
	}
	else if(newVal.length === 1){
		player2BigAxeThrow3El.innerHTML = newVal[0];
	}
	else if(newVal.length === 2){
		player2BigAxeThrow2El.innerHTML = newVal[0];
		player2BigAxeThrow3El.innerHTML = newVal[1];
	}
	else{
		player2BigAxeThrow1El.innerHTML = newVal[newVal.length-3];
		player2BigAxeThrow2El.innerHTML = newVal[newVal.length-2];
		player2BigAxeThrow3El.innerHTML = newVal[newVal.length-1];
	}
})

