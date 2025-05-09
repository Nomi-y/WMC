"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, gender, groesseM, gewichtKG) {
        if (gender == "m" || gender == "f") {
        }
        else {
            throw new Error("SSSSS");
        }
        this.name = name;
        this.gender = gender;
        this.groesseM = groesseM;
        this.gewichtKG = gewichtKG;
    }
    Person.prototype.groesseCM = function () {
        return this.groesseM * 100;
    };
    Person.prototype.vorName = function () {
        return this.name.split(" ")[0];
    };
    Person.prototype.nachName = function () {
        return this.name.split(" ")[1];
    };
    Person.prototype.toString = function () {
        return this.name + " (" + this.groesseCM() + "cm, " + this.gewichtKG + "kg)";
    };
    Person.prototype.getBmi = function () {
        return this.gewichtKG / (this.groesseM * this.groesseM);
    };
    Person.prototype.getGewichtType = function () {
        var bmi = this.getBmi();
        var _a = this.gender === "m" ? [20, 25] : [19, 24], under = _a[0], normal = _a[1];
        if (bmi < under)
            return "Untergewicht";
        if (bmi <= normal)
            return "Normalgewicht";
        return "Übergewicht";
    };
    return Person;
}());
exports.Person = Person;
