import fs from 'fs';

export class CsvFileReader {
  data: String[][] = [];

  constructor(public fileName: string) {}

  public read() {
    console.log('going to read csv file from ', this.fileName);
    this.data = fs
      .readFileSync(this.fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string) => {
        return row.split(',');
      });
  }
}
