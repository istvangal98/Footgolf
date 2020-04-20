import fs from "fs";
import http from "http";
import url from "url";
import Megoldas from "./Megoldas";

export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Futar ts</title>");
        res.write("</head>");
        res.write("<body><form><pre>");
        // Material Design Bootstrap súgó: https://mdbootstrap.com/
        // Font Awesome:
        res.write("<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.8.2/css/all.css'>");
        // Google Fonts:
        res.write("<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'>");
        // Bootstrap core CSS:
        res.write("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css'>");
        // Material Design Bootstrap:
        res.write("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.15.0/css/mdb.min.css'>");

        res.write("<title>Jedlik Ts Template</title>");
        res.write("</head>");
        res.write("<body><form><pre class='m-3'>");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const params = url.parse(req.url as string, true).query;
        // Olvassa be a fob2016.txt állományban lévő adatokat és tárolja el egy olyan adatszerkezetben, amely a további feladatok megoldására alkalmas! A fájlban legfeljebb 500 sor lehet.
        const megold: Megoldas = new Megoldas("fob2016.txt");

        //Határozza meg és írja ki a képernyőre a minta szerint, hogy hány versenyző indult összesen a két kategóriában a bajnokságon!
        res.write("3. feladat:");
        res.write(`<p>\tVersenyzők száma: ${megold.indulokszama}</p>`);

        //Határozza meg és írja ki a képernyőre a minta szerint a női versenyzők arányát az összes versenyzőszámhoz képest! A százalékos értéket két tizedesjegy pontossággal jelenítse meg!
        res.write("4. feladat:");
        res.write(`<p>\tA női versenyzőak aránya:${megold.Noiversenyzok.toFixed(2)}%</p>`);
        //Határozza meg és írja ki a minta szerint a 2016-os footgolf bajnokság legtöbb pontot szerzett női bajnokát! Feltételezheti, hogy legalább egy női induló volt a bajnokságon, és nem alakult ki holtverseny.
        res.write("6. feladat: ");
        res.write(`<p>\tNői bajnok: ${megold.Noibajnok}</p>`);
        //Készítsen szöveges állományt osszpontFF.txt néven, amelybe kiírja a felnőtt férfi kategóriában indult versenyzők nevét és a bajnokságban elért összpontszámát pontosvesszővel elválasztva
        res.write("7. feladat: ");
        res.write(`<p>\t${megold.állománybaÍr()}</p>`);
        //Készítsen statisztikát a minta szerint, hogy az egyes egyesületekből hány versenyző indult a bajnokságon! Az egyesületen kívül indult versenyzőknél az egyesületnél az „n.a.” adat szerepel. Ezek a versenyzők és az egy vagy két versenyzőt indító egyesületek ne szerepeljenek a statisztikában!
        //for (const i of megold.Statisztika) {
        //    res.write(i);
        //}
        res.write("</body></html>");
        // <---- Fejezd be a kódolást

        res.write("</pre></form>");

        res.write("</pre></form></body></html>");
        res.end();
    }
}
