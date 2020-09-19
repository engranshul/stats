import fs from 'fs';
import { DataReader } from "./DataReader";

export class CsvFileReader implements DataReader {
  data: string[][] = [];

  constructor(public fileName: string) { }

  public read() {
    this.data = fs
      .readFileSync(this.fileName, { encoding: 'utf-8' })
      .split('\n')
       .map((row: string) => {
        return row.split(',');
      })
     
  }
}
