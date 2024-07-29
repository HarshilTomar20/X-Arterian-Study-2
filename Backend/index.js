const express = require("express");

const app = express();
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

var users = [{
    name: 'Gambit',
    kidney: [{
        healthy1: true
    }, {
        healthy2: true
    }]
}];

app.get("/", function(req, res) {
    const KidneyInfo = users[0].kidney;
    const noOfKidneys = KidneyInfo.length;
    res.json({
        KidneyInfo,
        noOfKidneys
    });
});

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidney.push({
        kidney: isHealthy
    });

});

app.put("/", function(req, res) {

});

app.delete("/", function(req, res) {

});

app.listen(PORT, ()=> {
    console.log(`Listening in PORT: ${PORT}`)
})