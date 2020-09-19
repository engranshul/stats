import fs from 'fs';
import { dateStringToDate } from './Utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public fileName: string) {}

  public read() {
    this.data = fs
      .readFileSync(this.fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string) => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
  
  // below logic could be different according to diff classes..
  public mapRow(row: string[]): Matchdata {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
