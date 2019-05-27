"use strict";
module.exports = function(request, response){
    console.dir(request, {depth: null, colors: true});
    response.sendStatus(400);
};