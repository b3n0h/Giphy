let giphyApi = 'https://api.giphy.com/v1/gifs/trending/api_key=7OKg0xxG9vaCmcx7Vh3f9zE1PEkIgjBG'

fetch(giphyApi)
.then(function (r) {
  return r.json
})
.then(function (data) {
  console.log(data)
})
.catch(function (e) {
  console.log(e)
})