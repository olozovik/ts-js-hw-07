/* Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'. */

const inputEl = document.querySelector('input#name-input') as HTMLInputElement;
const greetingEl = document.querySelector(
    'span#name-output',
) as HTMLSpanElement;

function onChangeInput(): void {
    if (inputEl.value === '') {
        greetingEl.textContent = 'незнакомец';
    } else {
        greetingEl.textContent = inputEl.value;
    }
}

inputEl.addEventListener('input', onChangeInput);
