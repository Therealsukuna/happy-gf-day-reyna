function goToScreen(number) {
  document.querySelectorAll('.container').forEach(el => el.classList.add('hidden'));
  document.getElementById(`screen${number}`).classList.remove('hidden');
}

let grow = 1;

function makeYesBigger() {
  grow += 0.2;
  const yesBtn = document.getElementById("yesBtn");
  yesBtn.style.transform = `scale(${grow})`;

  if (grow > 3) {
    document.getElementById("noBtn").style.display = "none";
  }
}

function openLove() {
  goToScreen(3);
}
