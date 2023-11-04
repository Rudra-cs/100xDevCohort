"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpful_decorators_1 = require("helpful-decorators");
class DateClass {
    constructor(timeZone) {
        this.timeZone = timeZone;
    }
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
__decorate([
    helpful_decorators_1.measure
], DateClass.prototype, "getTime", null);
const dateObject = new DateClass("IND");
const res = dateObject.getTime();
console.log(res);
// To run this file run tsc -b in classes folder
// then do node src/index.js
