const express = require("express");
const app = express();
const port = 3000;

app.get("/api/userDetails", (req, res) => {
  var text = "Stranger 👽 (Please login)";

  const header = req.headers["x-ms-client-principal"];
  if (header != null) {
    const encoded = Buffer.from(header, "base64");
    const decoded = encoded.toString("ascii");
    text = JSON.parse(decoded)["userDetails"] + " ❤️";
  }

  res.send({ text: text });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
