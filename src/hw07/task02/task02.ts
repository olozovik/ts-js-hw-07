/* Напиши скрипт, который для каждого элемента массива ingredients создаст
отдельный li, после чего вставит все li за одну операцию в список 
ul.ingredients.Для создания DOM - узлов используй document.createElement(). */

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const listEl = document.querySelector('#ingredients');

const listArr = ingredients.map(ingredient => {
    const listItemEl = document.createElement('li');
    listItemEl.textContent = ingredient;
    return listItemEl;
});

listEl?.append(...listArr);
