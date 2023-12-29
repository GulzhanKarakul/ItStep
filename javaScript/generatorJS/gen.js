const log = console.log;

function infinite(list, tries) {
    var result = '';
    var length = list.length;
    
    for (var i = 0; i < tries; i++) {
      var index = i % length;
      result += list[index].textContent; //я специально сделала textContent, иначе это просто html object
    }
    
    return result;
}

//Пример использования
let list = document.querySelectorAll('li');
log(infinite(list, 8));

function* fib(n) {
    let a = 1;
    let b = 1;

    yield b;
    yield b;

    for (let i = 3; i <= n; i++) {
        let sum = a + b;
        a = b;
        b = sum;
        yield b;
    }
}

//Пример Использования
let a = fib(7);
log(a.next());
log(a.next());
log(a.next());

//Реализуйте итератор колоды карт (52 штуки) cardDeck. Каждая карта представлена в виде строки типа 2 Пик.
// При вызове функции next() будет представлена следующая карта. По окончании перебора всех элементов выбросить исключение StopIteration.
const cardsDeck = [
    '2 Пик', '3 Пик', '4 Пик', '5 Пик', '6 Пик', '7 Пик', '8 Пик', '9 Пик', '10 Пик', 'Валет Пик', 'Дама Пик', 'Король Пик', 'Туз Пик',
    '2 Треф', '3 Треф', '4 Треф', '5 Треф', '6 Треф', '7 Треф', '8 Треф', '9 Треф', '10 Треф', 'Валет Треф', 'Дама Треф', 'Король Треф', 'Туз Треф',
    '2 Бубен', '3 Бубен', '4 Бубен', '5 Бубен', '6 Бубен', '7 Бубен', '8 Бубен', '9 Бубен', '10 Бубен', 'Валет Бубен', 'Дама Бубен', 'Король Бубен', 'Туз Бубен',
    '2 Червей', '3 Червей', '4 Червей', '5 Червей', '6 Червей', '7 Червей', '8 Червей', '9 Червей', '10 Червей', 'Валет Червей', 'Дама Червей', 'Король Червей', 'Туз Червей',
];

let deck = cardsDeck[Symbol.iterator]();
while (true) {
    log(deck.next().value);
    if(deck.next().value === undefined){
        throw new Error('StopIteration');
    }
}
