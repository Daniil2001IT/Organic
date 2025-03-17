
/* Menu-icon Start */

const menuIcon = document.querySelector(
    '.menu-icon'),

    header = document.querySelector('header');
body = document.querySelector('body');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon_active');

    header.classList.toggle('header_mobile');
    body.classList.toggle('no-scroll');
});


/* Menu-icon End */



/* slider__item Start */

const sliderArrows = document.querySelector('.slider'),
    slidesArrows = sliderArrows.querySelectorAll('.slider__item'),
    prew = sliderArrows.querySelector(' .slider__nav-arrow_left'),
    next = sliderArrows.querySelector(' .slider__nav-arrow_right');

console.log(sliderArrows);


let slideIndex = 0;


prew.addEventListener('click', () =>
    showSlideArrows(-1));

next.addEventListener('click', () =>
    showSlideArrows(1));


function showSlideArrows(n) {


    slideIndex += n;

    if (slideIndex < 0) slideIndex = slidesArrows.length - 1;
    if (slideIndex >= slidesArrows.length) slideIndex = 0;


    slidesArrows.forEach(item => item.style.display = 'none');
    /* Через forEach обращаюсь к каждой картинке и через display = "none" картинки исчезают. Остаётся одна принажатии на Стрелку. Это функция меняет Индекс Текущего Слайда. */

    slidesArrows[slideIndex].style.display = 'block';
}

showSlideArrows(0);

/* slider__item End */




/* Slider-dots__nav Start */

const sliderDots = document.querySelector('.slider-dots'),
    /* По селектору нашёл нужный мне Блок, чтобы через него обращаться к другим элементам  */

    slidesDots = sliderDots.querySelectorAll(
        '.slider-dots__item'),
    /* Через querySelectorAll забрал все нужные мне элементы */

    wrapperDots = sliderDots.querySelector('.slider-dots__nav');
/* Через обёртку обращаюсь к навигации точек */


const dots = []; /* Массив для точек, которые будут входить сюда при их создании */

for (let i = 0; i < slidesDots.length; i++) {
    /* Через переменную let i = 0 говорю, что при промотке слайдов к 0 будет добавляться + одна единица ( i++), до тех пор пока промотка не дойдёт до общего колличества слайдов (до цифры 4) - их столько всего. Через < говорю, если при промотке слайдов окажется на одни слайд больше - чем общее колличество этих слайдов, то прамотка Закончится! Разрываю Цекличность, чтобы промотка была зафиксирована на определённом колличестве слайдов */

    const dot = document.createElement('button');
    /* Создаю через createElement Точки */


    dot.dataset.slideTo = i; /* 0 */
    /* dot - каждя точка. Через dataset создаю дата - отрибут (slideTo), который будет вести к 0. Нужно, чтобы точка КАЖДОГО СЛАЙДА вела к своему атрибуту - у меня пока такой один(0). Исправим - добавил i */

    dot.classList.add('slider-dots__nav-item');
    /* Через classList - прикрепляю class к каждой точке. Через add - добавляю этот класс к точке  */

    if (i == 0) dot.classList.add('slider-dots__nav-item_active');

    if (i != 0) slidesDots[i].style.display = 'none';
    /*  if (i != 0) - 1 слайд теперь стираться не будет. При промотке будет теперь отображаться один слайд! Остальных втдно не будет! */


    dot.addEventListener('click', showSlideDots)

    wrapperDots.append(dot);
    /* Через обёртку закидываю точки По Одной Страницу! Через append - (Добавляю)точку(dot)*/
    dots.push(dot);
    /* Через push добавляю теперь точки и на Страницу, и в Массив.  */

}

function showSlideDots(event) {
    /* Без это й функции и без события event в consol.log при клике на тоску - будет высвечиваться только 1. Нужно, чтобы при клике высвечивался нужный index с атрибутом и со Своей Нумерауией(0, 1, 2, 3). ПОЭТОМУ И СОЗДАЛ ФУНКЦИЮ. */

    const slideTo = event.target.dataset.slideTo;
    /* Обращаюсь к дате - атрибуту (dataset.slideTo = i). Нажимаю - вижу в консоле полное значение слайда при нажатии на точку. */

    slidesDots.forEach(item => item.style.display = 'none');
    /* Скрываю все Слайды. Позже сделаю, чтобы один Виднелся! slidesDots - выбрал все Слайды. forEach - перебираю слайды. item - обозначение слайда. .style - обращаюсь к стилям Слайда. display = 'none' - (удаляю все слайды.) */

    slidesDots[slideTo].style.display = 'block';
    /* index (само изображение) хранится Внутри slideTwo. Через display = 'block' - будет теперь показываться один из Слайдов! :) */

    dots.forEach(dot => dot.classList.remove(
        'slider-dots__nav-item_active'));
    /* Отдельную кажду точку через forEach перебираю. Через classList.remove убираю Класс Активности у Точек. */

    event.target.classList.add('slider-dots__nav-item_active');
    /*   event.target - та точка на, которую Кликнули. classList - обращаюсь к Классам Точки и Добавляю Уже Точки КЛАСС АКТИВНОСТИ! */
}





















/* Slider-dots__nav End */



















