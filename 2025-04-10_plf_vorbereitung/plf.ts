class Person {
    private name: string;
    private gender: string;
    private groesseM: number;
    private gewichtKG: number;

    public constructor(
        name: string,
        gender: string,
        groesseM: number,
        gewichtKG: number
    ) {
        if (gender == "m" || gender == "f") {
            
        } else {
            throw new Error("SSSSS")
        }
        this.name = name
        this.gender = gender
        this.groesseM = groesseM
        this.gewichtKG = gewichtKG
    }

    public groesseCM(): number {
        return this.groesseM*100;
    }

    public vorName():string {
        return this.name.split(" ")[0]
    }

    public nachName():string {
        return this.name.split(" ")[1]
    }

    public toString(): string {
        return this.name + " (" + this.groesseCM() + "cm, " + this.gewichtKG + "kg)";
    }

    public getBmi(): number {
        return this.gewichtKG / (this.groesseM * this.groesseM )
    }

    public getGewichtType(): string {
        const bmi = this.getBmi();
        const [under, normal] = this.gender === "m" ? [20, 25] : [19, 24];
        
        if (bmi < under) return "Untergewicht";
        if (bmi <= normal) return "Normalgewicht";
        return "Übergewicht";
    }
}
export { Person };
