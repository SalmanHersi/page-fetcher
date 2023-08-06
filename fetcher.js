const request = require("request");
const fs = require("fs");

const path = process.argv[3];
const domain = process.argv[2];

request(domain, (error, response, body) => {
  if (error) {
    console.error("Error:", error);
    return;
  }

  fs.writeFile(path, body, (error) => {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log(
        `Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`
      );
    }
  });
});
