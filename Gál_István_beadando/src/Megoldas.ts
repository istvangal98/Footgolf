import fs from "fs";
import Footgolf from "./Footgolf";

export default class Megoldas {
    private Footgolfok: Footgolf[] = [];

    constructor(forrás: string) {
        fs.readFileSync(forrás)
            .toString()
            .split("\n")
            .forEach(i => {
                const aktSor = i.trim();
                if (aktSor.length > 0) this.Footgolfok.push(new Footgolf(aktSor));
            });
    }
    public get indulokszama(): number {
        let darab = 0;
        for (const i of this.Footgolfok) {
            darab++;
        }
        return darab;
    }
    public get Noiversenyzok(): number {
        let darab: number = 0;
        let eredmeny: number = 0;
        for (const i of this.Footgolfok) {
            if (i.kategoria == "Noi") {
                darab++;
            }
        }
        eredmeny = (darab / this.indulokszama) * 100;
        return eredmeny;
    }
    public get Noibajnok(): string {
        let maxpont = 0;
        let bajnoknoegyesulet = "";
        let bajnoknonev = "";
        let eredmeny = "";
        for (const i of this.Footgolfok) {
            if (i.kategoria == "Noi" && i.osszpontszam > maxpont) {
                bajnoknonev = i.nev;
                bajnoknoegyesulet = i.egyesuletnev;
                maxpont = i.osszpontszam;
            }
        }
        if (maxpont != 0) {
            eredmeny = " Név: " + bajnoknonev + " Egyesület: " + bajnoknoegyesulet + " Összpont: " + maxpont;
        }
        return eredmeny;
    }
    public állománybaÍr(): void {
        const ki: string[] = [];
        for (const i of this.Footgolfok) {
            if (i.kategoria == "Felnott ferfi") {
                ki.push(`${i.nev};${i.osszpontszam}`);
            }
        }
        fs.writeFileSync("osszpontFF.txt", ki.join("\r\n") + "\r\n");
    }
    /*public get Statisztika(): Array<string> {
        const d: Map<string, number> = new Map<string, number>();
        const eredmeny: string[] = [];
        for (const i of this.Footgolfok) {
            if (d.has(i.egyesuletnev)) {
                d[i.egyesuletnev].Value++;
            } else {
                d.set(i.egyesuletnev, 1);
            }
        }
        for (const i of d) {
            if (i.keys() != "n.a." && i.Value >= 3) {
                eredmeny.push("\t{0} - {1} fő", i.Key, i.Value);
            }
        }
        return eredmeny;
    }*/
}
