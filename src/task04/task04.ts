/*
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение 
счетчика на 1.
Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
*/

const refs = {
    value: document.getElementById('value') as HTMLSpanElement,
    increment: document.querySelector(
        'button[data-action="increment"]',
    ) as HTMLButtonElement,
    decrement: document.querySelector(
        'button[data-action="decrement"]',
    ) as HTMLButtonElement,
};

let counterValue = 0;

function onClick(action: 'increment' | 'decrement'): void {
    if (action === 'increment') {
        counterValue++;
    } else {
        counterValue--;
    }

    refs.value.textContent = counterValue.toString();
}

refs.increment.addEventListener('click', () => onClick('increment'));
refs.decrement.addEventListener('click', () => onClick('decrement'));
