// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

const arr = [1, 5, 7, 9]

function arrMath(arr) {
    return Math.min(...arr)
}

console.log(arrMath(arr))

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

function createCounter() {

    function increment(count) {
        return count + 1;
    }

    function decrement(count) {
        return count - 1;
    }

    return { increment, decrement };
}
const createFunction = createCounter();

console.log(createFunction.increment(33));
console.log(createFunction.decrement(135));