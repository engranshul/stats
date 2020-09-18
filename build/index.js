"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("./MatchResult");
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.homeWin) {
        ++manUnitedWins;
    }
    if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.awayWin) {
        ++manUnitedWins;
    }
}
console.log("man united won " + manUnitedWins + " games");
