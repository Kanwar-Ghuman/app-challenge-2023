function main() {
  let network = document.querySelector("#network");
  window.addEventListener("load", () => {
    let historyHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      let updated = value.split(",");
      let status = "pending"; // Default status; modify this as per your application logic

      historyHTML += `
        <div class="cards-container" data-status="${status}">
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
        btn.parentElement.parentElement.parentElement.setAttribute(
          "data-status",
          "accepted"
        );
        btn.parentElement.parentElement.parentElement.style.display = "none";
      });
    });

    denyButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.parentElement.parentElement.parentElement.setAttribute(
          "data-status",
          "denied"
        );
        btn.parentElement.parentElement.parentElement.style.display = "none";
      });
    });
  });

  document
    .getElementById("showAccepted")
    .addEventListener("click", function (event) {
      event.preventDefault(); // This prevents the default behavior of the <a> tag
      document
        .querySelectorAll(".cards-container")
        .forEach((card) => (card.style.display = "none"));
      document
        .querySelectorAll(".cards-container[data-status='accepted']")
        .forEach((card) => (card.style.display = "block"));
    });

  document
    .getElementById("showDenied")
    .addEventListener("click", function (event) {
      event.preventDefault(); // This prevents the default behavior of the <a> tag
      document
        .querySelectorAll(".cards-container")
        .forEach((card) => (card.style.display = "none"));
      document
        .querySelectorAll(".cards-container[data-status='denied']")
        .forEach((card) => (card.style.display = "block"));
    });
  document
    .querySelector(".sidebar")
    .addEventListener("click", function (event) {
      if (
        event.target.tagName === "A" &&
        event.target.getAttribute("href").startsWith("#")
      ) {
        event.preventDefault();
        const targetElement = document.querySelector(
          event.target.getAttribute("href")
        );
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
}

main();
