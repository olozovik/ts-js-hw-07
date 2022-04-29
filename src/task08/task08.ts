/*
Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит
количество элементов в input и нажимает кнопку Создать, после чего рендерится
коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.
*/

const ref = {
    controlsBox: document.querySelector('#controls') as HTMLDivElement,
    input: document.querySelector('#controls input') as HTMLInputElement,
    createBtn: document.querySelector(
        '[data-action="render"]',
    ) as HTMLButtonElement,
    destroyBtn: document.querySelector(
        '[data-action="destroy"]',
    ) as HTMLButtonElement,
    boxes: document.querySelector('#boxes') as HTMLDivElement,
};

ref.createBtn.addEventListener('click', onClickCreate);
ref.destroyBtn.addEventListener('click', onClickDestroy);

function onClickCreate() {
    const amountBoxes: number = Number(ref.input.value);
    destroyBoxes();
    createBoxes(amountBoxes);
}

function onClickDestroy() {
    destroyBoxes();
    ref.input.value = '';
}

function createBoxes(amount: number): void {
    let size = 30;
    const boxesArray: Array<HTMLDivElement> = [];

    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomColor();
        boxesArray.push(div);
        size += 10;
    }

    ref.boxes.append(...boxesArray);
}

function getRandomNumber(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor(): string {
    const r = getRandomNumber(0, 255);
    const g = getRandomNumber(0, 255);
    const b = getRandomNumber(0, 255);

    return `rgb(${r}, ${g}, ${b})`;
}

function destroyBoxes(): void {
    ref.boxes.innerHTML = '';
}
