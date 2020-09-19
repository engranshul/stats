import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public outputTarget: OutputTarget, public analyzer: Analyzer) {}

  buildAndPrintReport(matches : MatchData[]): void {
    const output=this.analyzer.run(matches)
    this.outputTarget.print(output)

  }
}


