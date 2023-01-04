const fs = require("fs");
const path = require("path");

const fileName = path.join(__dirname, "app.log");

const add = (msg) => {
  if (fs.existsSync(fileName)) {
    fs.appendFileSync(fileName, msg);
  } else {
    fs.writeFileSync(fileName, msg);
  }
};

module.exports = add;
