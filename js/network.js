function main() {
  let network = document.querySelector("#network");
  window.addEventListener("load", () => {
    let historyHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      let updated = value.split(",");
      console.log(typeof updated);
      historyHTML += `
<div class="card">
  <div class="card-content">
    <h3>${key}</h3>
    <p>@${updated[0]}</p>
    <p>Languages Used: ${updated[2]}</p>
    <p>${updated[3]}</p>
    <img style="width: 150px; border-radius:10px;" src="${updated[4]}"/>
    
    <button class="btn-accept">Accept</button>
    <button class="btn-deny">Deny</button>
  </div>
</div>`;
    }
    network.innerHTML = historyHTML;
    // Get all the Accept and Deny buttons
    const acceptButtons = document.querySelectorAll(".btn-accept");
    const denyButtons = document.querySelectorAll(".btn-deny");

    // Loop through each Accept button and add an event listener
    acceptButtons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        // Handle accept action
        console.log(`Accepted card with key: ${localStorage.key(index)}`);
        // Optionally, you can remove the card or change its status here
      });
    });

    // Loop through each Deny button and add an event listener
    denyButtons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        // Handle deny action
        console.log(`Denied card with key: ${localStorage.key(index)}`);
        // Optionally, you can remove the card or change its status here
      });
    });
  });
}

main();
