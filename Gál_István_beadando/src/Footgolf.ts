export default class Footgolf {
    private _nev: string;
    private _kategoria: string;
    private _egyesuletnev: string;
    private _pontok: number[] = [];

    constructor(sor: string) {
        const m: string[] = sor.split(";");
        this._nev = m[0];
        this._kategoria = m[1];
        this._egyesuletnev = m[2];
        for (let index = 3; index < m.length; index++) {
            this._pontok.push(parseInt(m[index]));
        }
    }
    public get nev(): string {
        return this._nev;
    }
    public get kategoria(): string {
        return this._kategoria;
    }
    public get egyesuletnev(): string {
        return this._egyesuletnev;
    }
    public get pontok(): Array<number> {
        return this._pontok;
    }
    public get osszpontszam(): number {
        let osszpont = 0;
        this.pontok.sort();
        for (let i = 2; i < this.pontok.length; i++) {
            osszpont += this.pontok[i];
        }
        if (this.pontok[0] != 0) osszpont += 10;
        if (this.pontok[1] != 0) osszpont += 10;
        return osszpont;
    }
}
