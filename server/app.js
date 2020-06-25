const weatherAPI = require('./weatherbit');
const express = require('express');
const app = express();
var cors = require('cors');


app.use(cors());
app.get('/weather', (req,res) => {
    if(!req.query.city){
        return res.send({error: 'Null Value'});
    }

    weatherAPI.getForecast(req.query.city, (err, data) => {
        return res.send({err, data});
    })
    
});

app.listen(9000, () => {
    console.log("Listening on 9000");
})