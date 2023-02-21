const express = require("express");
const flureenjs = require("@fluree/flureenjs");
const { application } = require("express");
const flureeServerUrl = "http://localhost:8090";
const ledger = "test/new2";
var flureeDbConn;

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function flureeConn() {
  if (!flureeDbConn) {
    flureeDbConn = await flureenjs.connect(flureeServerUrl);
  }
  return flureeDbConn;
}

app.get("/query", async (req, res) => {
  const conn = await flureeConn();
  const db = await flureenjs.db(conn, ledger);
  const myQuery = {
    select: ["*"],
    from: "Offer",
  };

  const results = await flureenjs.query(db, myQuery);
  res.send(results);
});

app.post("/transact-user", async (req, res) => {
  const reqData = req.body;
  console.log(reqData);
  const conn = await flureeConn();
  const transaction = [{ ...reqData }];
  console.log(transaction);
  try {
    const results = await flureenjs.transact(conn, ledger, transaction);
    res.send(results);
  } catch (error) {
    const erroData = "This is error";
    res.send(erroData);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
