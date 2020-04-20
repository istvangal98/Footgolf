import fs from "fs";
import Megoldas from "../Megoldas";
import Footgolf from "../Footgolf";

describe("Megoldás osztály unit tesztek", () => {
    const instance: Megoldas = new Megoldas("fob2016.txt");

    it("Megoldás osztálypéldány ellenőrzése", async () => {
        expect(instance).toBeInstanceOf(Megoldas);
    });

    it("Női bajnok", async () => {
        expect(instance.Noibajnok).toBe(" Név: Major Ilona Egyesület: FTC FOOTGOLF Összpont: 665");
    });
    it("Indulók száma", async () => {
        expect(instance.indulokszama).toBe(77);
    });
    it("Női arány az összes versenyzőhöz", async () => {
        expect(instance.Noiversenyzok).toBe(11.688311688311687);
    });
    it("osszPontFF.txt", async () => {
        instance.állománybaÍr();
        expect(fs.readFileSync("osszPontFF.txt").toString()).toBe(fs.readFileSync("osszPontFF.txt").toString());
    });
});
