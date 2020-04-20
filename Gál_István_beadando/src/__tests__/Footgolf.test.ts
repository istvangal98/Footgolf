import Footgolf from "../Footgolf";

describe("Játékos osztály unit tesztek:", () => {
    const instance: Footgolf = new Footgolf("Albert Laszlo;Felnott ferfi;HOLE HUNTERS;0;0;10;10;0;0;0;10");

    it("Jatekos osztálypéldány ellenőrzése", async () => {
        expect(instance).toBeInstanceOf(Footgolf);
    });

    it("Játékos neve", async () => {
        expect(instance.nev).toBe("Albert Laszlo");
    });

    it("Játékos kategóriája", async () => {
        expect(instance.kategoria).toBe("Felnott ferfi");
    });

    it("Játékos egyesülete", async () => {
        expect(instance.egyesuletnev).toBe("HOLE HUNTERS");
    });

    it("Játékos összpontszáma", async () => {
        expect(instance.osszpontszam).toBe(30);
    });

    it("Pontok(1-n)", async () => {
        const tippek: number[] = [0, 0, 10, 10, 0, 0, 0, 10];
        for (let i = 1; i <= tippek.length; i++) {
            expect(instance.pontok[i]).toBe(tippek[i - 1]);
        }
    });
});
