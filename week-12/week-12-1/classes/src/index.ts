import { measure } from "helpful-decorators";
class DateClass {
  private timeZone: string;
  constructor(timeZone: string) {
    this.timeZone = timeZone;
  }

  @measure
  getTime() {
    var d = new Date();
    return d.getTime();
  }

  getMonth() {
    var d = new Date();
    return d.getMonth();
  }

  getTimeZone() {
    return this.timeZone;
  }

  expensiveOperation() {
    let ctr = 0;
    for (let i = 0; i < 100000000000; i++) {
      ctr++;
    }
    console.log(ctr);
  }
}

const dateObject = new DateClass("IND");
const res = dateObject.getTime();
console.log(res);

// To run this file run tsc -b in classes folder
// then do node src/index.js
// As decorators are in still in experimentation so run this file use `tsc --experimentalDecorators`
