// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//invoke mimicServerCall in response to user action
//function randomly returns "success" or "fail"
//if successful update the heart to toggle between empty and full
//if fail display the error messages to the DOM

//mimicServerCall()
const modal = document.getElementById("modal").setAttribute('class', 'hidden')
const likeGlyphs = document.getElementsByClassName("like-glyph")

for(let heart in likeGlyphs){
  likeGlyphs[heart].addEventListener("click", (event) => {
    const heart = event.target;
    mimicServerCall()
    .then(res => {
      if(heart.innerText === FULL_HEART){
        heart.innerText = EMPTY_HEART;
        heart.classList.remove("activated-heart")
      }else{
        heart.innerText = FULL_HEART
        heart.classList.add("activated-heart");
      }
    })
    .catch((err) => {
      document.getElementById("modal").classList.remove("hidden")
      document.getElementById("modal-message").textContent = err
      setTimeout(()=> {document.getElementById("modal").setAttribute('class', 'hidden')}, 3000)
    })
  })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
