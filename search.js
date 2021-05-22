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