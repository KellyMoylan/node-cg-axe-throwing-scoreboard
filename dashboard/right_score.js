const player2_throw1Rep = nodecg.Replicant('player2_throw1', {defaultValue: "-"});
const player2_throw2Rep = nodecg.Replicant('player2_throw2', {defaultValue: "-"});
const player2_throw3Rep = nodecg.Replicant('player2_throw3', {defaultValue: "-"});
const player2_throw4Rep = nodecg.Replicant('player2_throw4', {defaultValue: "-"});
const player2_throw5Rep = nodecg.Replicant('player2_throw5', {defaultValue: "-"});
const player2_totalRep = nodecg.Replicant('player2_total', {defaultValue: 0});

const player2_throw1_disEl = document.getElementById('player_2_throw_1_display');
const player2_throw2_disEl = document.getElementById('player_2_throw_2_display');
const player2_throw3_disEl = document.getElementById('player_2_throw_3_display');
const player2_throw4_disEl = document.getElementById('player_2_throw_4_display');
const player2_throw5_disEl = document.getElementById('player_2_throw_5_display');
const testAreaEl = document.getElementById('testArea');

const resetPlayersRightRep = nodecg.Replicant('resetPlayersRight');

function right_throw1(value){
    player2_throw1Rep.value = value;
    throw_1_display(value);
}

function right_throw2(value){
    player2_throw2Rep.value = value;
    throw_2_display(value);
}

function right_throw3(value){
    player2_throw3Rep.value = value;
    throw_3_display(value);
}

function right_throw4(value){
    player2_throw4Rep.value = value;
    throw_4_display(value);
}

function right_throw5(value){
    player2_throw5Rep.value = value;
    throw_5_display(value);
}

function reset_right(){
    player2_throw1Rep.value = "-";
    player2_throw2Rep.value = "-";
    player2_throw3Rep.value = "-";
    player2_throw4Rep.value = "-";
    player2_throw5Rep.value = "-";
    player2_throw1_disEl.innerHTML = "-";
    player2_throw2_disEl.innerHTML = "-";
    player2_throw3_disEl.innerHTML = "-";
    player2_throw4_disEl.innerHTML = "-";
    player2_throw5_disEl.innerHTML = "-";
	player2_totalRep.value = 0;
}

function throw_1_display(throw_value){
    player2_throw1_disEl.innerHTML = throw_value;
}
function throw_2_display(throw_value){
    player2_throw2_disEl.innerHTML = throw_value;
}
function throw_3_display(throw_value){
    player2_throw3_disEl.innerHTML = throw_value;
}
function throw_4_display(throw_value){
    player2_throw4_disEl.innerHTML = throw_value;
}
function throw_5_display(throw_value){
    player2_throw5_disEl.innerHTML = throw_value;
}

player2_throw1Rep.on('change', (newVal) => {
    add_total();

})

player2_throw2Rep.on('change', (newVal) => {
    add_total();
})

player2_throw3Rep.on('change', (newVal) => {
    add_total();
})

player2_throw4Rep.on('change', (newVal) => {
    add_total();
})

player2_throw5Rep.on('change', (newVal) => {
    add_total();
})

function add_total(){
    let right_round_total = 0;
    if(Number.isInteger(player2_throw1Rep.value)){
        right_round_total = right_round_total + player2_throw1Rep.value;
    }
    if(Number.isInteger(player2_throw2Rep.value)){
        right_round_total = right_round_total + player2_throw2Rep.value;
    }
    if(Number.isInteger(player2_throw3Rep.value)){
        right_round_total = right_round_total + player2_throw3Rep.value;
    }
    if(Number.isInteger(player2_throw4Rep.value)){
        right_round_total = right_round_total + player2_throw4Rep.value;
    }
    if(Number.isInteger(player2_throw5Rep.value)){
        right_round_total = right_round_total + player2_throw5Rep.value;
    }
    player2_totalRep.value = right_round_total;
}

resetPlayersRightRep.on('change', (newVal) => {
    reset_right();
})
