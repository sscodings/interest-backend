const express = require("express");
const app = express();

app.get("/interest",function(req,res){
    const principle = parseFloat(req.query.principle);
    const rate = parseFloat(req.query.rate);
    const time = parseFloat(req.query.time);

    const interest = principle*(rate/100)*time;
    const total = principle+interest;
    res.send({
        total:total,
        interest:interest
    });
})

app.listen(3000);