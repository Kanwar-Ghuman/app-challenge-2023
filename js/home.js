document.getElementById("getStartedButton").addEventListener("click", () => {
  console.log("Button Clicked");
  window.location.href = "form.html";
});

const phrases = ["Collaborate", "Connect", "Innovate", "Network"];
let phraseIndex = 0;
let charIndex = 0;
const typingSpeed = 150;
const deletingSpeed = 100;
const delayBetweenPhrases = 50000;
let isDeleting = false;
const changingPhraseElement = document.getElementById("changingPhrase");

function typePhrase() {
  if (isDeleting) {
    changingPhraseElement.textContent = phrases[phraseIndex].substr(
      0,
      charIndex - 1
    );
    charIndex--;

    if (charIndex <= 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  } else {
    changingPhraseElement.textContent = phrases[phraseIndex].substr(
      0,
      charIndex + 1
    );
    charIndex++;

    if (charIndex >= phrases[phraseIndex].length) {
      isDeleting = true;
    }
  }

  let timeout = isDeleting ? deletingSpeed : typingSpeed;
  if (!isDeleting && charIndex === phrases[phraseIndex].length) {
    timeout += delayBetweenPhrases;
  }

  setTimeout(typePhrase, timeout);
}

// Start the typing effect
typePhrase();
