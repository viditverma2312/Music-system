document.getElementById("form1").addEventListener("submit" , searchSong);

function searchSong(e) {
  const song = document.querySelector("#search").value;
  console.log(song);

//   fetch("https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f", {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${userAccessToken}`
//   }
// })
// .then(response => response.json())
// .then(({beats}) => {
//   beats.forEach((beat, index) => {
//     console.log(`Beat ${index} starts at ${beat.start}`);
//   })
// })


//  GET https://api.spotify.com/v1/tracks/{id}



  fetch(`https://api.spotify.com/v1/search/${song}`)
    // method: "GET",
    // headers: {
    //   Authorization: `Bearer ${BQDl8C4NXVHpVBjpX1lMYr5zRplvRASNnwPmHN6QLns_jxNAqHQb-ueT032LPIB8MZJfTxsuXtYZNJFXe5QnQqU4bkKOvX3OK2YpvTD02JhswwKULb_jj9EXnCCHPK0G-ixCwy133llSZlK2zEIWGCda3HD2_ckHqDgUfjsZy-XSBld6id4}`
    //  }
    // })
  .then((Response)=>{
    console.log(Response.status);
    if(Response.status == 200)
    return Response.json();
  })
  .then((song)=>{
      console.log(song);
  })
  .catch((err)=>console.log("error occurred"));


  e.preventDefault();
}