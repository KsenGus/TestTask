let cardButtons = document.querySelectorAll('.card__button'),
    overlay = document.querySelector('.overlay'),
    buy = document.querySelector('.form__buy'),
    _close = document.querySelector('.form__close'),
    header = document.querySelector('.header'),
    menuItems = document.querySelectorAll('.menu__item'),
    listItems = document.querySelectorAll('.list__item'),
    categories = document.querySelectorAll('.content'),
    themeButton = document.querySelector('.header__button'),
    cards = document.querySelectorAll('.card'),
    footer = document.querySelector('.footer'),
    up = document.querySelector('.up'),
    selectColor = document.querySelectorAll('.form__selector'),
    radio = document.querySelectorAll('input[type = "radio"]'),
    date = document.querySelectorAll('.card__date'),
    count = 0,
    currentCategory = 0;

//переход по категориям
function chooseCategory(item, i){
    item.addEventListener('click', () => {
        categories.forEach((category) => category.style.display = 'none');
        categories[i].style.display = 'block';
        categories[i].scrollIntoView();
        currentCategory = i;
    });
}
menuItems.forEach((item, i) => chooseCategory(item, i));
listItems.forEach((item, i) => chooseCategory(item, i));

//кнопка для возврата наверх
window.addEventListener('scroll', () => {
    if(this.scrollY > 1){
        up.style.display = 'block';
    }
    else up.style.display = 'none';
});
up.addEventListener('click', (e) => {
    e.preventDefault();
    categories[currentCategory].scrollIntoView();
});

//функция вывода даты
function rewriteDate(time){
    let date = new Date(Date.parse(time.split('.').reverse().join('-'))),
        weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 
            'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
        d = date.getDay(),
        m = date.getMonth(),
        year = date.getFullYear(),
        dt = date.getDate(),
        week = Math.floor((dt - 1) / 7) + 1;
    return `${weekDays[d]}, ${week} неделя ${months[m]} ${year} года`;
}
date.forEach((i) => i.textContent = rewriteDate(i.textContent));

//работа с формой
cardButtons.forEach((button) => {
    button.addEventListener('click', () => overlay.style.display = 'block');
});
buy.addEventListener('click', (e) =>{
    e.preventDefault();
    alert('Спасибо за покупку!');
    overlay.style.display = 'none';  
});
_close.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.style.display = 'none';
});
selectColor.forEach((item, i) => {
    item.addEventListener('click', () =>{
        if(radio[i].checked){
            for(let j = 0; j < radio.length; j++){
                if(j == i)
                    continue;
                radio[j].checked = false;
            }
        }
    });
});

//переключение темы
themeButton.addEventListener('click', () => {
    count ++;
    if(count % 2 == 0){
        header.classList.remove('black-theme');
        themeButton.textContent = 'Тёмная тема';
        categories.forEach((content) => content.classList.remove('black-theme'));
        cards.forEach((card) => card.style.border = '1px solid #000');
        footer.classList.remove('black-theme');
    }
    else{
        header.classList.add('black-theme');
        themeButton.textContent = 'Светлая тема';
        categories.forEach((content) => content.classList.add('black-theme'));
        cards.forEach((card) => card.style.border = '1px solid #ffff');
        footer.classList.add('black-theme');
    }
});