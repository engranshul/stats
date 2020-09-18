import fs from 'fs';

// loading data
const matches = fs
  .readFileSync('football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map((row: string) => {
    return row.split(',');  // parsing
  });

// analysing
let manUnitedWins = 0;
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    ++manUnitedWins;
  }
  if (match[2] === 'Man United' && match[5] === 'A') {
    ++manUnitedWins;
  }
}
// reporting
console.log(`man united won ${manUnitedWins} games`);
