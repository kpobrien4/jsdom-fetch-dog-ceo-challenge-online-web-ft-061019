console.log('%c HI', 'color: firebrick')
document.addEventListener( "DOMContentLoaded", function () {
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(resp => resp.json())
      .then(json => postImage(json) )
  
  function postImage(json) {
    json.message.forEach(function(imageUrl) {
      let image = document.createElement('img')
      image.src = imageUrl
      document.querySelector('#dog-image-container').appendChild(image)
    });
   };
  })
  
  document.addEventListener( "DOMContentLoaded", function () {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(resp => resp.json())
      .then(json => postBreed(json))
  
  
    function postBreed(json) {
      for (breed in json.message) {
        let breedElement = document.createElement('li')
        breedElement.textContent = breed
        document.querySelector('#dog-breeds').appendChild(breedElement)
  
        breedElement.addEventListener('click', changeColor)
      }
    }
   })
  
   function changeColor(event) {
     event.target.style.color = 'blue';
   }