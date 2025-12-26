let teamSize = 0;
let totalPlayers = 0;
let maxPlayers = 20;

function goStep2(){
  teamSize = parseInt(document.getElementById("teamType").value);

  if(!teamSize){
    alert("Please select team type");
    return;
  }

  if(totalPlayers + teamSize > maxPlayers){
    alert("Match Full!");
    return;
  }

  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");

  let playersDiv = document.getElementById("players");
  playersDiv.innerHTML = "";

  for(let i=1; i<=teamSize; i++){
    playersDiv.innerHTML += `
      <input placeholder="Player ${i} Name">
      <input placeholder="Player ${i} FF UID">
    `;
  }
}

function goStep3(){
  totalPlayers += teamSize;
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");
}

function goStep4(){
  document.getElementById("step3").classList.add("hidden");
  document.getElementById("step4").classList.remove("hidden");

  let time = 300;
  let timer = setInterval(()=>{
    let m = Math.floor(time/60);
    let s = time % 60;
    document.getElementById("timer").innerText =
      `${m}:${s < 10 ? "0"+s : s}`;
    time--;

    if(time < 0){
      clearInterval(timer);
      document.getElementById("step4").classList.add("hidden");
      document.getElementById("step5").classList.remove("hidden");
    }
  },1000);
}