let topBlock = document.querySelector('.top-block');
let botBlock = document.querySelector('.bot-block');


// КНопка редагування
document.querySelector('.btn-edit').addEventListener('click', () => {
    document.querySelector('.text-area').value = topBlock.innerHTML;
    document.querySelector('.edit-box').classList.add('show');
    document.querySelector('.style-box').classList.remove('show');
})

// Кнопка Save
document.querySelector('.btn-save').addEventListener('click', () => {
    topBlock.innerHTML = document.querySelector('.text-area').value;

})
// Вибір розміра шрифта
document.querySelector('.form-size').addEventListener('click', () => {
    if (event.target.className == 'fz') {
        topBlock.style.fontSize = event.target.value;
    }
})

// Вибір стилю шрифта
document.querySelector('.ff').addEventListener('change', () => {
    topBlock.style.fontFamily = event.target.value;
})

// КНопка для вибору кольору для тексту
document.querySelector('.btn-color-text').addEventListener('click', () => {
    document.querySelector('.color-block').style.display = 'flex';
    document.querySelector('.bg-block').style.display = 'none';
})

// КНопка для вибору кольору для фону
document.querySelector('.btn-color-bg').addEventListener('click', () => {
    document.querySelector('.bg-block').style.display = 'flex';
    document.querySelector('.color-block').style.display = 'none';
})

// генерація кольорів
let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'gray', 'black', 'white', 'deeppink'];
for (let i = 0; i < document.querySelector('.color-block').children.length; i++) {
    document.querySelector('.color-block').children[i].style.backgroundColor = colors[i];
    document.querySelector('.color-block').children[i].addEventListener('click', () => {
        topBlock.style.color = event.target.style.backgroundColor;
    })
}

// генерація кольорів
for (let i = 0; i < document.querySelector('.bg-block').children.length; i++) {
    document.querySelector('.bg-block').children[i].style.backgroundColor = colors[i];
    document.querySelector('.bg-block').children[i].addEventListener('click', () => {
        topBlock.style.backgroundColor = event.target.style.backgroundColor;
    })
}

// вибір жирного шрифта
document.querySelector('.check-bold').addEventListener('click', () => {
    if (event.target.checked) {
        topBlock.classList.add('bold');
    } else {
        topBlock.classList.remove('bold');
    }
})

// вибір курсивного шрифта
document.querySelector('.check-cursive').addEventListener('click', () => {
    if (event.target.checked) {
        topBlock.classList.add('cursive');
    } else {
        topBlock.classList.remove('cursive');
    }
})

document.querySelector('.btn-style').addEventListener('click', () => {
    document.querySelector('.style-box').classList.add('show');
    document.querySelector('.edit-box').classList.remove('show');
})

// кнопка для відкриття вікна (додавання таблиці або списку)
document.querySelector('.btn-add').addEventListener('click', () => {
    document.querySelector('.constructor-block').classList.add('show');
    document.querySelector('.top-block').style.display = 'none';
    document.querySelector('.btn-block').style.display = 'none';
    document.querySelector('.bot-block').style.display = 'none';
})

// КНопка створення таблиці
document.querySelector('.create_table_btn').addEventListener('click', () => {
    let countTR = document.querySelector('.countTR').value;
    let countTD = document.querySelector('.countTD').value;
    let widthTD = document.querySelector('.widthTD').value;
    let heightTD = document.querySelector('.heightTD').value;
    let widthBorder = document.querySelector('.widthBorder').value;
    let typeBorder = document.querySelector('.typeBorder').value;
    let colorBorder = document.querySelector('.colorBorder').value;
    document.querySelector('.text-area').value += `<table> <tbody>`;
    let td = "";

    for (let a = 0; a < countTD; a++) {
        td += `<td style="width: ${widthTD}px; height: ${heightTD}px; border-width: ${widthBorder}px; border-style: ${typeBorder}; border-color: ${colorBorder};"></td>`;
    }

    for (let i = 0; i < countTR; i++) {
        document.querySelector('.text-area').value += `<tr> ${td} </tr>`;
    }
    document.querySelector('.text-area').value += `</tbody> </table>`;
    document.querySelector('.top-block').style.display = 'block';
    document.querySelector('.btn-block').style.display = 'block';
    document.querySelector('.bot-block').style.display = 'block';
    document.querySelector('.constructor-block').classList.remove('show');
})

document.querySelector('.radio-table1').addEventListener('click', () => {

    document.querySelector('.table_form').classList.add('show');
    document.querySelector('.list_form').classList.remove('show');

})

document.querySelector('.radio-table2').addEventListener('click', () => {

    document.querySelector('.list_form').classList.add('show');
    document.querySelector('.table_form').classList.remove('show');

})


// КНопка створення списку
document.querySelector('.create_list_btn').addEventListener('click', () => {
    let countLi = document.querySelector('.countList').value;
    let typeLi = document.querySelector('.typeList').value;
    document.querySelector('.text-area').value += `<ul style="list-style-type: ${typeLi}">`;
    for (let i = 0; i < countLi; i++) {
        document.querySelector('.text-area').value += `<li>item ${i+1}</li>`;
    }
    document.querySelector('.text-area').value += '</ul>';
    document.querySelector('.top-block').style.display = 'block';
    document.querySelector('.btn-block').style.display = 'block';
    document.querySelector('.bot-block').style.display = 'block';
    document.querySelector('.constructor-block').classList.remove('show');
})