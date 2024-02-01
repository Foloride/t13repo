// Input data
let Dolgozok = [{
        nev: "Koaxk Ábel",
        kor: 23,
        fizetes: 400000,
        beosztas: "Rendszergazda"
    },
    {
        nev: "Zsíros B. Ödön",
        kor: 45,
        fizetes: 1200000,
        beosztas: "Ügyvezető Igazgató"
    },
    {
        nev: "Meg Győző",
        kor: 32,
        fizetes: 600000,
        beosztas: "Marketing Manager"
    },
    {
        nev: "Békés Csaba",
        kor: 63,
        fizetes: 180000,
        beosztas: "Takarító"
    },
    {
        nev: "Pofá Zoltán",
        kor: 25,
        fizetes: 300000,
        beosztas: "Biztonsági Őr"
    },
    {
        nev: "Fejet Lenke",
        kor: 22,
        fizetes: 220000,
        beosztas: "Irodai Titkár"
    },
    {
        nev: "Vak Cina",
        kor: 30,
        fizetes: 500000,
        beosztas: "Üzem Orvos"
    }
]

// Print all solutions
PrintMonthlyExpenses();
PrintMostEarner();
PrintYoungest();
PrintAveragePay();
console.log(`Legfiatalabb dolgozó bére ${GetLocaleNumber(30000)} Forinttal növelve. Új átlag:`);
IncreaseBerForYoungest();
PrintAveragePay();
IncreasePayForBelowAverage();
console.log(`Átlag alatti fizetések növelve 10%-kal. Új átlag: `);
PrintAveragePay();
PrintOldest();
PrintYearsUntilRetirementForOldest();

// Implementations
function GetMonthlyExpenses() {
    let expenses = 0;
    for (const dolgozo of Dolgozok) {
        expenses += dolgozo.fizetes;
    }
    return expenses;
}

function GetLocaleNumber(number) {
    // szépítés olvashatóság miatt :)
    return number.toLocaleString(undefined, { minimumFractionDigits: 2 })
}

function PrintMonthlyExpenses() {
    console.log(`Cég havi költsége: ${GetLocaleNumber(GetMonthlyExpenses())} Ft.`);
}

function PrintMostEarner() {
    let result = Dolgozok[0];
    for (const dolgozo of Dolgozok) {
        if (dolgozo.fizetes > result.fizetes){
            result = dolgozo;
        }
    }
    PrintDolgozo(result);
}

function PrintDolgozo(dolgozo) {
    console.log(`Dolgozó adatai: \nnév: ${dolgozo.nev}\nkor: ${dolgozo.kor}\nfizetés: ${GetLocaleNumber(dolgozo.fizetes)}\nbeosztás: ${dolgozo.beosztas}`)
}

function GetYoungest() {
    let result = Dolgozok[0];
    for (const dolgozo of Dolgozok) {
        if (dolgozo.kor < result.kor) {
            result = dolgozo;
        }
    }
    return result;
}

function PrintDolgozoNevAndKor(dolgozo, message) {
    console.log(`${message} dolgozó: ${dolgozo.nev} (${dolgozo.kor} éves)`);
}

function PrintYoungest() {
    PrintDolgozoNevAndKor(GetYoungest(), "Legfiatalabb");
}

function IncreaseBerForYoungest() {
    let youngest = GetYoungest();
    youngest.fizetes += 30000;
}

function GetAveragePay() {
    return GetMonthlyExpenses() / Dolgozok.length;
}

function PrintAveragePay() {
    console.log(`Átlagbér a cégnél: ${GetLocaleNumber(GetAveragePay())} Ft.`);
}

function IncreasePayForBelowAverage() {
    let average = GetAveragePay();
    for (const element of Dolgozok) {
        let dolgozo = element;
        if (dolgozo.fizetes < average){
            dolgozo.fizetes *= 1.1;
        }
    }
}

function GetOldest() {
    let result = Dolgozok[0];
    for (const dolgozo of Dolgozok) {
        if (result.kor < dolgozo.kor) {
            result = dolgozo;
        }
    }
    return result;
}

function PrintOldest() {
    PrintDolgozoNevAndKor(GetOldest(), "Legidösebb");
}

function YearsUntilRetirement() {
    return 65 - GetOldest().kor;
}

function PrintYearsUntilRetirementForOldest() {
    console.log(`${YearsUntilRetirement()} év van még neki hátra munkából...`);
}
