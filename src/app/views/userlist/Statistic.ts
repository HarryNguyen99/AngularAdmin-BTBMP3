export class Statistic {
  name: string;
  data: number[];

  constructor() {}

  setName(name: string) {
    this.name = name;
  }

  setData(data: number[]) {
    this.data = data;
  }
}
