/*
Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое 
на правильное количество символов.
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если 
неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.
*/

/*
    Получить инпут
    Узнать длину из дата-атрибута
    Переписать класс в зависимости от условия
*/

const inputEl = document.querySelector('#validation-input') as HTMLInputElement;

type Classes = 'valid' | 'invalid';

function replaceClass(
    elem: HTMLInputElement,
    addClass: Classes,
    removeClass: Classes,
): void {
    elem.classList.remove(removeClass);
    elem.classList.add(addClass);
}

function onInputBlur(): void {
    const inputLength = Number(inputEl.dataset.length);

    if (inputEl.value.length === inputLength) {
        replaceClass(inputEl, 'valid', 'invalid');
    } else if (inputEl.value.length !== 0) {
        replaceClass(inputEl, 'invalid', 'valid');
    } else {
        inputEl.classList.remove('valid', 'invalid');
    }
}

inputEl.addEventListener('blur', onInputBlur);

export {};
