let emptyString = '';
for (let counter = 0; counter < 20; counter++) { // Першим циклом задаємо ширину
    for (let cycleVariable = 0; cycleVariable < 20; cycleVariable++) {
        emptyString = `${emptyString}*`;// беремо всі дані, які були до, і додаємо зірочку
    }
    emptyString = `${emptyString}\n`;
}
console.log(emptyString);

// Якщо нам потрібно вивести якийсь конкретний край, ми можемо ставити умови

let storage = '';
for (let widthCounter = 0; widthCounter < 20; widthCounter++) { // Першим циклом задаємо ширину
    for (let cycleVariable = 0; cycleVariable < 20; cycleVariable++) { //Ми отримуємо максимальні числа і коли збільшується ітератор, ми не повинні випустити частину, щоб цикл почався наново
        if (widthCounter < cycleVariable) {
            storage = `${storage}*`;
        }
    }
    storage = `${storage}\n`;
}
console.log(storage);

let variableStorage = '';
for (let widthCounter = 0; widthCounter < 20; widthCounter++) { // Першим циклом задаємо ширину
    for (let cycleVariable = 0; cycleVariable < 20; cycleVariable++) { //Ми отримуємо максимальні числа і коли збільшується ітератор, ми не повинні випустити частину, щоб цикл почався наново
        if (widthCounter < cycleVariable) {
            variableStorage = `${variableStorage} `
        } else {
            variableStorage = `${variableStorage}*`;
        }
    }
    variableStorage = `${variableStorage}\n`;
}
console.log(variableStorage);


let emptyStringStorage = '';
for (let widthCounter = 0; widthCounter < 20; widthCounter++) { // Першим циклом задаємо ширину
    for (let cycleVariable = 0; cycleVariable < 20; cycleVariable++) { //Ми отримуємо максимальні числа і коли збільшується ітератор, ми не повинні випустити частину, щоб цикл почався наново
        if (widthCounter > cycleVariable) {
            emptyStringStorage = `${emptyStringStorage} `
        } else {
            emptyStringStorage = `${emptyStringStorage}*`;
        }
    }
    emptyStringStorage = `${emptyStringStorage}\n`;
}
console.log(emptyStringStorage);

let m = 20;
let starStorage = "";
for (let i = 1; i <= m; i++) {
    for (let j = 0; j < m - i; j++) {
        starStorage += " ";
    }
    for (let k = 0; k < i; k++) {
        starStorage += "*";
    }
    starStorage += "\n";
}
console.log(starStorage);


//The send watch. It's not my option, I googled it

let n = 5;
let string = "";
// Reversed pyramid pattern
for (let i = 0; i < n; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
        string += " ";
    }
    // printing star
    for (let k = 0; k < (n - i) * 2 - 1; k++) {
        string += "*";
    }
    string += "\n";
}
// pyramid pattern
for (let i = 2; i <= n; i++) {
    // printing spaces
    for (let j = n; j > i; j--) {
        string += " ";
    }
    // printing star
    for (let k = 0; k < i * 2 - 1; k++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);