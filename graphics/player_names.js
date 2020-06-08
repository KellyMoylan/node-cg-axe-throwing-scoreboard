// import {gsap} from '../node_modules/gsap/index.js';

const leftClubLogoRep = nodecg.Replicant('leftClubLogo');
const rightClubLogoRep = nodecg.Replicant('rightClubLogo');

const left_nameEl = document.getElementById('left_name');
const left_locationEl = document.getElementById('left_location');
const right_nameEl = document.getElementById('right_name');
const right_locationEl = document.getElementById('right_location');

leftClubLogoRep.on('change', (newVal) => {
    left_nameEl.innerHTML = newVal.split(",")[0];
    left_locationEl.innerHTML = newVal.split(",")[1];
})

rightClubLogoRep.on('change', (newVal) => {
    right_nameEl.innerHTML = newVal.split(",")[0];
    right_locationEl.innerHTML = newVal.split(",")[1];
})
