const leftClubLogoRep = nodecg.Replicant('leftClubLogo');
const rightClubLogoRep = nodecg.Replicant('rightClubLogo');
const leftPlayerInfoOverallRep = nodecg.Replicant('leftPlayerInfoOverall');
const rightPlayerInfoOverallRep = nodecg.Replicant('rightPlayerInfoOverall');

const leftClubLogoEl = document.getElementById('leftClubLogo');
const rightClubLogoEl = document.getElementById('rightClubLogo');

const testareaEl = document.getElementById('testarea');

function update() {
    leftPlayerInfoOverallRep.value = leftClubLogoEl.value;
    rightPlayerInfoOverallRep.value = rightClubLogoEl.value;
    leftClubLogoRep.value = leftClubLogoEl.value;
    rightClubLogoRep.value = rightClubLogoEl.value;
    testareaEl.innerHTML = leftClubLogoEl.value;
}

