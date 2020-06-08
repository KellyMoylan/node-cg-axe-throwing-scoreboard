const player1_throw1Rep = nodecg.Replicant('player1_throw1', {defaultValue: "-"});
const player1_throw2Rep = nodecg.Replicant('player1_throw2', {defaultValue: "-"});
const player1_throw3Rep = nodecg.Replicant('player1_throw3', {defaultValue: "-"});
const player1_throw4Rep = nodecg.Replicant('player1_throw4', {defaultValue: "-"});
const player1_throw5Rep = nodecg.Replicant('player1_throw5', {defaultValue: "-"});
const player1_totalRep = nodecg.Replicant('player1_total', {defaultValue: 0});

const player1_throw1_disEl = document.getElementById('player_1_throw_1_display');
const player1_throw2_disEl = document.getElementById('player_1_throw_2_display');
const player1_throw3_disEl = document.getElementById('player_1_throw_3_display');
const player1_throw4_disEl = document.getElementById('player_1_throw_4_display');
const player1_throw5_disEl = document.getElementById('player_1_throw_5_display');

const resetPlayersLeftRep = nodecg.Replicant('resetPlayersLeft');

function left_throw1(value){
    player1_throw1Rep.value = value;
    throw_1_display(value);
}

function left_throw2(value){
    player1_throw2Rep.value = value;
    throw_2_display(value);
}

function left_throw3(value){
    player1_throw3Rep.value = value;
    throw_3_display(value);
}

function left_throw4(value){
    player1_throw4Rep.value = value;
    throw_4_display(value);
}

function left_throw5(value){
    player1_throw5Rep.value = value;
    throw_5_display(value);
}

function reset_left(){
    player1_throw1Rep.value = "-";
    player1_throw2Rep.value = "-";
    player1_throw3Rep.value = "-";
    player1_throw4Rep.value = "-";
    player1_throw5Rep.value = "-";
    player1_throw1_disEl.innerHTML = "-";
    player1_throw2_disEl.innerHTML = "-";
    player1_throw3_disEl.innerHTML = "-";
    player1_throw4_disEl.innerHTML = "-";
    player1_throw5_disEl.innerHTML = "-";
	player1_totalRep.value = 0;
}

function throw_1_display(throw_value){
    player1_throw1_disEl.innerHTML = throw_value;
}
function throw_2_display(throw_value){
    player1_throw2_disEl.innerHTML = throw_value;
}
function throw_3_display(throw_value){
    player1_throw3_disEl.innerHTML = throw_value;
}
function throw_4_display(throw_value){
    player1_throw4_disEl.innerHTML = throw_value;
}
function throw_5_display(throw_value){
    player1_throw5_disEl.innerHTML = throw_value;
}

player1_throw1Rep.on('change', (newVal) => {
    add_total();
})

player1_throw2Rep.on('change', (newVal) => {
    add_total();
})

player1_throw3Rep.on('change', (newVal) => {
    add_total();
})

player1_throw4Rep.on('change', (newVal) => {
    add_total();
})

player1_throw5Rep.on('change', (newVal) => {
    add_total();
})

function add_total(){
    let left_round_total = 0;
    if(Number.isInteger(player1_throw1Rep.value)){
        left_round_total = left_round_total + player1_throw1Rep.value;
    }
    if(Number.isInteger(player1_throw2Rep.value)){
        left_round_total = left_round_total + player1_throw2Rep.value;
    }
    if(Number.isInteger(player1_throw3Rep.value)){
        left_round_total = left_round_total + player1_throw3Rep.value;
    }
    if(Number.isInteger(player1_throw4Rep.value)){
        left_round_total = left_round_total + player1_throw4Rep.value;
    }
    if(Number.isInteger(player1_throw5Rep.value)){
        left_round_total = left_round_total + player1_throw5Rep.value;
    }
    player1_totalRep.value = left_round_total;
}

resetPlayersLeftRep.on('change', (newVal) => {
    reset_left();
})
