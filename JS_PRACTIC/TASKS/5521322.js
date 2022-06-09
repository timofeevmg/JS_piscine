'use strict';

// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

// Место для третьей задачи
function getMathResult(base, count) {
    if (typeof count !== 'number' || count <= 0)
        return base;

    let result = '';
    for (let i = 0; i < count; i++) {
        let add = (i < count - 1 ? `${base + base * i}---` : `${base + base * i}`);
        result += `${add}`;
    }
    return result;
}
