spoiler = document.getElementById('spoilers');

spoiler.addEventListener('mouseover', revealSpoilers);
spoiler.addEventListener('mouseout', hideSpoilers);


function revealSpoilers () {
  var spoiler = document.getElementById('spoilers');
  spoiler.classList.remove('hidden');
  spoiler.classList.add('revealed');
}

function hideSpoilers () {
  var spoiler = document.getElementById('spoilers');
  spoiler.classList.add('hidden');
  spoiler.classList.remove('revealed');
}
