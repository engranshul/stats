import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();
console.log(`data extracted is ${reader.data}`);

let manUnitedWins = 0;
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.homeWin) {
    ++manUnitedWins;
  }
  if (match[2] === 'Man United' && match[5] === MatchResult.awayWin) {
    ++manUnitedWins;
  }
}

console.log(`man united won ${manUnitedWins} games`);
