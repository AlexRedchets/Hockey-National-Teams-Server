var express = require('express');
var route = express.Router();
var Country = require('../models/country');

route.get('/player/:name', function(req, res){
    var Player = require('../models/player');
    Player.find({national_team:req.params.name},function(err, players){
        if(err || !players){
            console.dir('Error in searching team');
            res.send('Error in searching team');
        }
        else{
            console.dir('Players found');
            res.send(players);
        }
    });
});

route.get('/country', function (req, res) {
    var Country = require('../models/country');
    Country.find(function (err, countries) {
        if(err || !countries){
            console.dir('Error in searching team');
            res.send('Error in searching team');
        }
        else{
            console.dir('Countries found');
            res.send(countries);
        }
    })
});

module.exports = route;