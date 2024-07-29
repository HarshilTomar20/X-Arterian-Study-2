// Node.js is an open-source, cross-platform JavaScript runtime environment
// Asynchronous and Event-Driven
// Single-Threaded Model, Rich Ecosystem, Real-Time Applications: 

const express = require("express");
const PORT = 3000;

// function summy(n) {
//     let ans = 0;
//     for(let i=0; i<n; i++) {
//         ans = ans + i;
//     }

//     return ans;
// }

// app.get("/", async function(req, res) {
//     const input = req.query.n;

//     const ans = summy(input);
//     res.send(`Hi your answer is ${ans}`);
// })

const express = require("express");
const app = express();

const users = [
  {
    name: "Johny DoePoeSoe",
    healthyKidney: 1,
    unhealthyKidney: 1,
    totalKindey: 2,
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const healthystuff = users[0].healthyKidney;
  const unhealthystuff = users[0].unhealthyKidney;
  const totalstuff = users[0].totalKindey;
  res.json({
    healthystuff,
    unhealthystuff,
    totalstuff,
  });
});

app.post("/", function (req, res) {
  const healthystuff = req.body.healthyKidney || 0;
  while (healthystuff > 0) {
    users[0].unhealthyKidney--;
    users[0].healthyKidney++;
    healthystuff--;
  }
  res.json({
    message: "Operation done boi!",
  });
});

app.delete("/", function (req, res) {
  if (users[0].unhealthyKidney > 0) {
    users[0].unhealthyKidney = 0;

    res.json({
      message: "Deleted Broski",
    });
  } else {
    res.json({
      message: "Bro is all healthy",
    });
  }
});

app.listen(PORT, ()=> {
    console.log(`Listening on PORT: ${PORT}`)
});