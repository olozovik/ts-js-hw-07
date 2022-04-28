/*
Напиши скрипт, который реагирует на изменение значения input#font-size-control 
(событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
В результате при перетаскивании ползунка будет меняться размер текста.
*/

const inputEl = document.querySelector(
    '#font-size-control',
) as HTMLInputElement;
const spanEl = document.querySelector('span#text') as HTMLSpanElement;

const defaultFontSize: number = Number.parseInt(
    window.getComputedStyle(spanEl, null).getPropertyValue('font-size'),
);
const defaultInputValue: number = Number(inputEl.value);

function onInputChange(e: Event): void {
    const currentTarget = e.currentTarget as HTMLInputElement;
    const diff: number = Number(currentTarget.value) - defaultInputValue;

    spanEl.style.fontSize = `${String(defaultFontSize + diff)}px`;
}

inputEl.addEventListener('change', onInputChange);

export {};
