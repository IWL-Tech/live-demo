const express = require("express");
const fetch = require("node-fetch");
const app = express();
const fs = require("fs");
const database = "../stations/stations.json";

app.use(express.json());

app.delete("/ecc.depart", (req, res, next) => {
  let db = JSON.parse(fs.readFileSync(database).toString());
  db.stations[0].scheduled.forEach((element) => {
    if (element.trainid == req.query.trainid) {
      db.stations[0].scheduled.shift();
    }
  });
  fs.writeFileSync(database, JSON.stringify(db));
  res.send({ response: "done" });
});
app.post("/ecc.schedule", (req, res, next) => {
  console.log(req.body);
  const train = {
    terminus: req.body.terminus,
    origin: req.body.origin,
    sta: req.body.sta,
    std: req.body.std,
    trainid: req.body.trainid,
    delay: req.body.delay,
  };
  console.log(train);
  let db = JSON.parse(fs.readFileSync(database).toString());
  db.stations[0].scheduled.push(train);
  fs.writeFileSync(database, JSON.stringify(db));
  res.send({ response: "done" });
});
app.delete("/ece.depart", (req, res, next) => {
  let db = JSON.parse(fs.readFileSync(database).toString());
  db.stations[1].scheduled.forEach((element) => {
    if (element.trainid == req.query.trainid) {
      db.stations[1].scheduled.shift();
    }
  });
  fs.writeFileSync(database, JSON.stringify(db));
  res.send({ response: "done" });
});
app.post("/ece.schedule", (req, res, next) => {
  console.log(req.body);
  const train = {
    terminus: req.body.terminus,
    origin: req.body.origin,
    sta: req.body.sta,
    std: req.body.std,
    trainid: req.body.trainid,
    delay: req.body.delay,
  };
  console.log(train);
  let db = JSON.parse(fs.readFileSync(database).toString());
  db.stations[1].scheduled.push(train);
  fs.writeFileSync(database, JSON.stringify(db));
  res.send({ response: "done" });
});
app.delete("/pbg.depart", (req, res, next) => {
  let db = JSON.parse(fs.readFileSync(database).toString());
  db.stations[2].scheduled.forEach((element) => {
    if (element.trainid == req.query.trainid) {
      db.stations[2].scheduled.shift();
    }
  });
  fs.writeFileSync(database, JSON.stringify(db));
  res.send({ response: "done" });
});
app.post("/pbg.schedule", (req, res, next) => {
  console.log(req.body);
  const train = {
    terminus: req.body.terminus,
    origin: req.body.origin,
    sta: req.body.sta,
    std: req.body.std,
    trainid: req.body.trainid,
    delay: req.body.delay,
  };
  console.log(train);
  let db = JSON.parse(fs.readFileSync(database).toString());
  db.stations[2].scheduled.push(train);
  fs.writeFileSync(database, JSON.stringify(db));
  res.send({ response: "done" });
});
app.delete("/fqr.depart", (req, res, next) => {
  let db = JSON.parse(fs.readFileSync(database).toString());
  db.stations[3].scheduled.forEach((element) => {
    if (element.trainid == req.query.trainid) {
      db.stations[3].scheduled.shift();
    }
  });
  fs.writeFileSync(database, JSON.stringify(db));
  res.send({ response: "done" });
});
app.post("/fqr.schedule", (req, res, next) => {
  console.log(req.body);
  const train = {
    terminus: req.body.terminus,
    origin: req.body.origin,
    sta: req.body.sta,
    std: req.body.std,
    trainid: req.body.trainid,
    delay: req.body.delay,
  };
  console.log(train);
  let db = JSON.parse(fs.readFileSync(database).toString());
  db.stations[3].scheduled.push(train);
  fs.writeFileSync(database, JSON.stringify(db));
  res.send({ response: "done" });
});
app.delete("/skl.depart", (req, res, next) => {
  let db = JSON.parse(fs.readFileSync(database).toString());
  db.stations[4].scheduled.forEach((element) => {
    if (element.trainid == req.query.trainid) {
      db.stations[4].scheduled.shift();
    }
  });
  fs.writeFileSync(database, JSON.stringify(db));
  res.send({ response: "done" });
});
app.post("/skl.schedule", (req, res, next) => {
  console.log(req.body);
  const train = {
    terminus: req.body.terminus,
    origin: req.body.origin,
    sta: req.body.sta,
    std: req.body.std,
    trainid: req.body.trainid,
    delay: req.body.delay,
  };
  console.log(train);
  let db = JSON.parse(fs.readFileSync(database).toString());
  db.stations[4].scheduled.push(train);
  fs.writeFileSync(database, JSON.stringify(db));
  res.send({ response: "done" });
});
app.post("/route1.signon/ecc", (req, res, next) => {
    const ecctrain = {
        terminus: "Smallbrook Lighthouse",
        origin: "Em Chester Centrale",
        sta: null,
        std: Date.now() + 180000,
        trainid: req.body.trainid,
        delay: req.body.delay,
    };
    const ecetrain = {
        terminus: "Smallbrook Lighthouse",
        origin: "Em Chester Centrale",
        sta: Date.now() + 270000,
        std: Date.now() + 300000,
        trainid: req.body.trainid,
        delay: req.body.delay,
    };
    const pbgtrain = {
        terminus: "Smallbrook Lighthouse",
        origin: "Em Chester Centrale",
        sta: Date.now() + 525000,
        std: Date.now() + 555000,
        trainid: req.body.trainid,
        delay: req.body.delay,
    };
    const fqrtrain = {
        terminus: "Smallbrook Lighthouse",
        origin: "Em Chester Centrale",
        sta: Date.now() + 780000,
        std: Date.now() + 810000,
        trainid: req.body.trainid,
        delay: req.body.delay,
    };
    const skltrain = {
        terminus: "Smallbrook Lighthouse",
        origin: "Em Chester Centrale",
        sta: Date.now() + 1020000,
        std: null,
        trainid: req.body.trainid,
        delay: req.body.delay,
    };
    let db = JSON.parse(fs.readFileSync(database).toString());
    db.stations[0].scheduled.push(ecctrain);
    db.stations[1].scheduled.push(ecetrain);
    db.stations[2].scheduled.push(pbgtrain);
    db.stations[3].scheduled.push(fqrtrain);
    db.stations[4].scheduled.push(skltrain);
    const trains = [ecctrain, ecetrain, pbgtrain, fqrteain, skltrain]
    fs.writeFileSync(database, JSON.stringify(db));
    res.send({ "ECC": true, "ECE": true, "PBG": true, "FQR": true, "SKL": true, "timestamp": Date.now() });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
