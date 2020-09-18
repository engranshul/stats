"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
function dateStringToDate(dateStr) {
    var dateParts = dateStr.split('/').map(function (value) {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}
exports.dateStringToDate = dateStringToDate;
