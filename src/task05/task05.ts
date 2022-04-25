/* Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'. */

const inputEl = document.querySelector('input#name-input');
const greetingEl = document.querySelector('span#name-output');

function onChangeInput(): void {
    if (!(inputEl instanceof HTMLInputElement) || !greetingEl) {
        return;
    }

    if (inputEl.value === '') {
        greetingEl.textContent = 'незнакомец';
    } else {
        greetingEl.textContent = inputEl.value;
    }
}

inputEl?.addEventListener('input', onChangeInput);
