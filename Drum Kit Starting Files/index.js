var drumButtons = document.querySelectorAll(".drum");

var letter;
var song;
var audio;

// Detect button click
for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function() {
    letter = this.textContent;
    makeSound(letter);
    document.addEventListener("keydown", buttonAnimation(letter));
    buttonAnimation(letter);
  })
}

// Detect keyboard press
document.addEventListener("keydown", function(event) {
  var validButton = false;
  makeSound(event.key);
  buttonAnimation(event.key);
});


// Function responsible to map
function makeSound(theChar) {
  switch (theChar) {
    case "w":
      song = "tom-1.mp3";
      audio = new Audio("./sounds/" + song);
      audio.play();
      break;
    case "a":
      song = "tom-2.mp3";
      audio = new Audio("./sounds/" + song);
      audio.play();
      break;
    case "s":
      song = "tom-3.mp3";
      audio = new Audio("./sounds/" + song);
      audio.play();
      break;
    case "d":
      song = "tom-4.mp3";
      audio = new Audio("./sounds/" + song);
      audio.play();
      break;
    case "j":
      song = "snare.mp3";
      audio = new Audio("./sounds/" + song);
      audio.play();
      break;
    case "k":
      song = "crash.mp3";
      audio = new Audio("./sounds/" + song);
      audio.play();
      break;
    case "l":
      song = "kick-bass.mp3";
      audio = new Audio("./sounds/" + song);
      audio.play();
      break;
    default:
      console.log("This object clicked: " + theChar);
  }

}

// Function that adds animatino to the clicked or pressed buttons
function buttonAnimation(currentKey) {
  try {
  var activeButton = document.querySelector("." + currentKey);
  } catch (e) {
    console.log(e.message);
    return;
  } finally {
  }
  if (activeButton != null) {
    activeButton.classList.add("pressed");
    setTimeout(function() {
      if (activeButton.classList.contains("pressed")) {
        activeButton.classList.remove("pressed");
      }
    }, 100);
  }
}
