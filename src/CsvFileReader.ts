import fs from 'fs';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export abstract class CsvFileReader {
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

  // below logic could be different according to what type of csv we need to read..
  public abstract mapRow(row: string[]) : MatchData;
}
