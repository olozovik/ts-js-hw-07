/* Напиши скрипт, который выполнит следующие операции.
Посчитает и выведет в консоль количество категорий в ul#categories, то есть 
элементов li.item. Получится 'В списке 3 категории.'.
Для каждого элемента li.item в списке ul#categories, найдет и выведет 
в консоль текст заголовка элемента (тега h2) и количество элементов в 
категории (всех вложенных в него элементов li).
Например для первой категории получится:
Категория: Животные
Количество элементов: 4 */

// Вариант 1:

const categoryList = document.querySelectorAll('#categories .item');
console.log(`В списке ${categoryList.length} категории.`);

categoryList.forEach(item => {
    const titleEl = item.querySelector('h2');
    if (titleEl) {
        console.log(`Категория: ${titleEl.textContent}`);
    }

    const listEl = item.querySelector('ul');
    if (listEl) {
        console.log(`Количество элементов: ${listEl.children.length}`);
    }
});

// Вариант 2:

// const categoriesEl = document.querySelector("#categories");
// if (categoriesEl) {
//   const categoryList = categoriesEl.children;
//   console.log(`В списке ${categoryList.length} категории.`);

//   for (const item of categoryList) {
//     const titleEl = item.firstElementChild;
//     if (titleEl) {
//       console.log(`Категория: ${titleEl.textContent}`);
//       const listEl = titleEl.nextElementSibling;
//       if (listEl) {
//         console.log(`Количество элементов: ${listEl.children.length}`);
//       }
//     }
//   }
// }
