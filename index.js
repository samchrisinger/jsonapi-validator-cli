#! /usr/bin/env node

var fs = require('fs');

var Validator = require('jsonapi-validator').Validator;
var validator = new Validator();

if (process.argv[2]) {
    fs.readFile(process.argv[2], null, function(err, contents) {
        var data = JSON.parse(contents);
        try {
            validator.validate(data);        
            console.log("No errors found");
        }
        catch(e) {
            console.log(e);
            process.exit(1);
        }
    });
}
else {
    console.log("Please supply an input JSON file to validate");
    process.exit(1);
}
