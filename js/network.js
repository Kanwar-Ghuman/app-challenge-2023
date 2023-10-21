function main() {
  let network = document.querySelector("#network");
  window.addEventListener("load", () => {
    let historyHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      let updated = value.split(",");
      historyHTML += `
        <div class="cards-container">
          <article class="cta">
            <img src='${updated[4]}' alt='Profile Image' style="border-radius:10px;">
            <div class="cta__text-column">
              <h2><a href="mailto:${updated[1]}" style="text-decoration: none; color: inherit;">@${updated[0]}</a></h2>
              <p>Languages Used: ${updated[2]}</p>
              <p>${updated[3]}</p>
              <button class="btn-accept">Accept</button>
              <button class="btn-deny">Deny</button>
            </div>
          </article>
        </div>`;
    }
    network.innerHTML = historyHTML;

    const acceptButtons = document.querySelectorAll(".btn-accept");
    const denyButtons = document.querySelectorAll(".btn-deny");

    acceptButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.parentElement.parentElement.parentElement.style.display = "none"; // hide the card
      });
    });

    denyButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.parentElement.parentElement.parentElement.style.display = "none"; // hide the card
      });
    });
  });
}

main();
