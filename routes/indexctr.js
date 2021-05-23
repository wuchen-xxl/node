var express = require("express");
var router = express.Router();
var mysql = require('./../database');
var formidable = require("formidable");

router.get('/popupsignin',function(req,res,next){
    res.render('popupsignin');
})

router.get('/popupsignup',function(req,res,next){
    res.render('popupsignup');
})

router.post("/popupsignin",function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields){
        var username = fields.name;
        var password = fields.password
    var query = 'insert into user values ("'+username+'","'+password+'")' 
    mysql.query(query,function(err,rows,a){
        if(err){
            console.log(err);
            return;
        }
        res.json({"status":1});
    })

    })
})
router.post("/signup",function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields){
        var firstname = fields.firstname;
        var lastname = fields.lastname;
        var email = fields.email;
        var password = fields.password;
    var query = 'insert into user (email,firstname,pass,lastname) values ("'+email+'","'+firstname+'","'+password+'","'+lastname+'")' 
    mysql.query(query,function(err,rows){
        if(err){
            console.log(err);
            return;
        }
        res.json({"status":1});
    })

    })
})

module.exports = router;