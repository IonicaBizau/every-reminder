"use strict";

const Notifier = require("node-notifier");

/**
 * everyReminder
 * Displays a reminder notification every interval.
 *
 * @name everyReminder
 * @function
 * @param {Number} a Param descrpition.
 * @param {Number} b Param descrpition.
 * @return {Number} Return description.
 */
module.exports = (interval, message) => {
    let func = () => {
        Notifier.notify(message)
    };
    setInterval(func, interval);
    func();
};
