// displays gifs
function displayGif (gif) {
  let searchUrl = 'https://api.giphy.com/v1/gifs/search?q=' + gif + '&api_key=7OKg0xxG9vaCmcx7Vh3f9zE1PEkIgjBG&limit=10'
  $.ajax({
    url: searchUrl,
    method: "GET"
  }).then(function (r) {
    r.data.forEach(function (data) {
      $('#gifs').append(`
        <div>
          <img src='${data.images.original.url}' alt='gif'>
        </div>
      `)
    })
    $('#searchGif').val('')
    console.log(r);
  })
}

function newButtons (gif) {
  $('#gifButtons').append(`
    <button type="button" class="btn btn-secondary btn-sm" id="newGifBtn">${gif}</button>
  `)
  $('#gifButtons').attr(gif)
}

// create empty function
function empty () {
}

// handles search gif button click
$('#findGif').on('click', function () {
  event.preventDefault()
  let gif = $('#searchGif').val()
  displayGif(gif)
  newButtons(gif)
})

// handles new gif button click
$('#newGifBtn').on('click', function () {
  
})