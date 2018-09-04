const express = require('express');
const fs = require('fs');
const path = require('path');



/*
    @type middleware    
    @params req res next
    @returns new Console logger    
*/

exports.activityLogger = function (req, res, next) {

    // output paths
    const output = fs.createWriteStream(path.join(__dirname, '../reports/activity.report.log'), {
        flags: 'a+'
    });
    const errorOutput = fs.createWriteStream(path.join(__dirname, '../reports/error.report.log'), {
        flags: 'a+'
    });

    // new Console instance
    const logger = new console.Console(output, errorOutput);

    // Logs to logger output file
    logger.log(`${req.method} ${req.url}  ${new Date().toString()}`);
    next();
}