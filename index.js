document.getElementById("form1").addEventListener("submit" , searchSong);

function searchSong(e) {
  const song = document.querySelector("#search").value;
  console.log(song);


//   fetch(`https://api.spotify.com/v1/search/${song}`)
//     // method: "GET",
//     // headers: {
//     //   Authorization: `Bearer ${BQDl8C4NXVHpVBjpX1lMYr5zRplvRASNnwPmHN6QLns_jxNAqHQb-ueT032LPIB8MZJfTxsuXtYZNJFXe5QnQqU4bkKOvX3OK2YpvTD02JhswwKULb_jj9EXnCCHPK0G-ixCwy133llSZlK2zEIWGCda3HD2_ckHqDgUfjsZy-XSBld6id4}`
//     //  }
//     // })
//   .then((Response)=>{
//     console.log(Response.status);
//     if(Response.status == 200)
//     return Response.json();
//   })
//   .then((song)=>{
//       console.log(song);
//   })
//   .catch((err)=>console.log("error occurred"));


  e.preventDefault();
}


$(document).ready(function () {

  $('#form1').on('submit', function () {

      const settings = {
          "async": true,
          "crossDomain": true,
          "url": `https://genius.p.rapidapi.com/search?q=${$('#search').val()}`,
          "method": "GET",
          "headers": {
              "x-rapidapi-key": "e8c5b6b0b8msh8b909b5664673cbp1c28edjsncbc4c25caecf",
              "x-rapidapi-host": "genius.p.rapidapi.com"
          }
      };

      $.ajax(settings).done(function (response) {
          console.log(response)
          showRelatedSong(response);
      });


      function showRelatedSong(response) {

          $('.card').remove();

          // response.response.hits ====>>>> ARRAY
          for (let index = 0; index < response.response.hits.length; index++) {

              // console.log(response.response.hits[index].result.full_title);
              $(".card-container").append(`
                      <div class="card">
                          <img src="${response.response.hits[index].result.header_image_thumbnail_url}" style="width:100%">

                          <div class="container">
                              <h4><b>${response.response.hits[index].result.full_title}</b></h4>
                          </div>
                      </div>   
              `);

          }



          // console.log(response.response.hits[0].result.full_title);
      }
  });


})





//  GET https://api.spotify.com/v1/tracks/{id}