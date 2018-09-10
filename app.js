let gif

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
          <img src='${data.images.fixed_height_still.url}' data-still="${data.images.fixed_height_still.url}" data-gif="${data.images.fixed_height.url}" class="giphy" alt="gif">
        </div>
        <p>Rating: ${data.rating.toUpperCase()}</p>
        <hr>
      `)
    })
    $('#searchGif').val('')
    console.log(r);
  })
}

// inital array
let IniBtns = ['tennis', 'basketball', 'volleyball', 'hockey', 'football']

// shows initial buttons
function showButtons () {
  $('#gifButtons').empty()
  for (i = 0; i < IniBtns.length; i++) {
    $('#gifButtons').append(`<button type="button" class="btn btn-secondary btn-sm btnArr mr-2">${IniBtns[i]}</button>`)
  }
}
showButtons()

// handles when new gif button is created
function newButtons (gif) {
  IniBtns.push(gif)
  $('#gifButtons').attr(gif)
  showButtons()
}

// handles search gif button click
$('#findGif').on('click', function () {
  event.preventDefault()
  gif = $('#searchGif').val()
  newButtons(gif)
})

// handles new gif button click
$(document).on('click', '.btnArr', function () {
  gif = $(this).text()
  displayGif(gif)
})

// handles playing gifs
$(document).on('click', '.giphy', function () {
  let imgSrc = $(this).attr("src")
  let still = $(this).attr("data-still")
  let giphy = $(this).attr("data-gif")
  if (imgSrc === still) {
    $(this).attr("src", giphy)
  } else {
    $(this).attr("src", still)
  }
})
