let counter = 0;

function lnko(a, b) {
    while (true) {
        counter++;
        if (a > b) {
            let rest = a % b;
            if (rest === 0) {
                return b;
            } else {
                a = b;
                b = rest;
            }
        } else if (b > a) {
            let rest = b % a;
            if (rest === 0) {
                return a;
            } else {
                b = a;
                a = rest;
            }
        } else {
            return a;
        }
    }
}

let num1 = 15648951261560;
let num2 = 45649189652515;

console.log(`lnko(${num1},${num2}): ${lnko(num1, num2)}\nciklus futások száma: ${counter}`);
