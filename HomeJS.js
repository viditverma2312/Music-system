document.getElementById("form1").addEventListener("submit" , searchSong);

function searchSong(e) {
  const song = document.querySelector("#search").value;
  console.log(song);
  e.preventDefault();
}
