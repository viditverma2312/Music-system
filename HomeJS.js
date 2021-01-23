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

  fetch(`GET https://api.spotify.com/v1/tracks/${song}`)
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







// ID: 6hj90s55alsu0u5wgdz8i40vt
// Token for search item(with user-read-private scope): BQAygj1XnQ79aUgkzOR26Cfkp2SAAAXgg0FRg8SqTKnzbYejjGAxSX1GkpsxTw_9RO7ulCk6MAUifC44it52RbgqpT69HzYvMd7Gi1ZPii60r3-whj5yaWxt1I2PqjIbtujH5zln3xZp4i2nxm8L0DfPuiajm9ucXRnzTPs5x32K
//                      (with all scope): BQC6Fix_mfQO_yrTR8BG9waNQ2cpnJv6lN5hsbJjnsrxbUIoBLVw6cor8e2v36a5OQtk5-7ui5WOXHmwBTGE5AZp085OCU6hqj0-8SxZ2DwU-43kFP0K5hGxj98gb4nitFCh9YDep07WdU7WNBvuI4W-pG8b48Rx4XBg3RAcP9-_Zezh1lhhCCK-SunX5FuvTMAqS6uhn32C_4kj_9_G-j_C1Q1XYR13_z50Mr3_fZEP6hhj_p-kYTXeg_JxCp78gg0EUWEBn0jo9xEmmuyd4n6H5EkEzdR7Ss4