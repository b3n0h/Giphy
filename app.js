// displays gifs
// function displayGif () {
  let gif = $(this).attr('data-gif')
  let tempgif = 'cat'
  let searchUrl = 'https://api.giphy.com/v1/gifs/search?q=' + tempgif + '&api_key=7OKg0xxG9vaCmcx7Vh3f9zE1PEkIgjBG&limit=10'
  $.ajax({
    url: searchUrl,
    method: "GET"
  }).then(function (r) {
    r.data.forEach(function (data) {
      $('#gifs').append(`
        <div>
          <img src='${data.images.original.url}' alt='stillgif'>
        </div>
      `)
    })
    console.log(r);
  })
// }

// adds new buttons
// function newButtons () {
//   event.preventDefault()
//   let gifButton = $('#searchGif')
// }

// // handles search gif button click
// $('#findGif').on('click', function () {

// })