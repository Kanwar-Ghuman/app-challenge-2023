const mongoose = require("mongoose");
let 
function main() {
  mongoose
    .connect(
      "mongodb+srv://heyanantraj:Welcome.2020@peopleinfo.18l4vgp.mongodb.net/?retryWrites=true&w=majority/CodeCollaboration"
    )
    .then(() => console.log("db connected"))
    .catch((err) => console.log(err));
}

main();

