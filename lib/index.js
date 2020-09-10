"use strict";

const Notifier = require("node-notifier");

/**
 * everyReminder
 * Displays a reminder notification every interval.
 *
 * @name everyReminder
 * @function
 * @param {Number} interval The interval in ms.
 * @param {Number} message The message to show..
 */
module.exports = (interval, message) => {
    let func = () => {
        Notifier.notify(message)
    };
    setInterval(func, interval);
    func();
};
