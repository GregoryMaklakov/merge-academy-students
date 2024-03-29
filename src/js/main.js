"use strict";

import svgGitHumIcon from '../assets/images/github.svg';
import svgMailIcon from '../assets/images/mail.svg';

const students = [
    {
        "name": "Андреєв Вячеслав",
        "github": "https://github.com/SlavaAndreievvvv",
        "email": "andreiev.viacheslav@gmail.com",
        "photo": "https://avatars.githubusercontent.com/u/114100602?v=4"
    },
    {
        "name": "Шутька Інна",
        "github": "https://github.com/inna-shutka",
        "email": "inna102992@gmail.com",
        "photo": "https://avatars.githubusercontent.com/u/114100620?v=4"
    },
    {
        "name": "Маклаков Григорій",
        "github": "https://github.com/GregoryMaklakov",
        "email": "maklakov.grigory@gmail.com",
        "photo": "https://avatars.githubusercontent.com/u/105268946?v=4"
    },
    {
        "name": "Картавенко Богдан",
        "github": "https://github.com/bogdanKartavenko",
        "email": "bogdankartavenko@gmail.com",
        "photo": "https://avatars.githubusercontent.com/u/71920438?v=4"
    },
    {
        "name": "Микитенко Валерій",
        "github": "https://github.com/kasper93721",
        "email": "valeraa.mikitenkoo@gmail.com",
        "photo": "https://avatars.githubusercontent.com/u/114100530?v=4"
    },
    {
        "name": "Конопльов Владислав",
        "github": "https://github.com/chooh-chooh",
        "email": "v.konoplov@merge.rocks",
        "photo": "https://avatars.githubusercontent.com/u/114100580?v=4"
    }
];


const list = document.querySelector('.students__cards');

const getPerson = students.reverse().map((item) => {

    return list.insertAdjacentHTML('afterbegin', `
    <li class="student__list card">
          <img class="card__photo" src="${item.photo}" alt="avatar"></img>
          <div class="card__name-wrp">
            <h2 class="card__name">${item.name}</h2>
            <div class="card__mail-wrp">
                <img class="card__mail-svg" src="${svgMailIcon}" alt="mail">
                <a href="mailto:" class="card__mail">${item.email}</a>
            </div>
          </div>
          <div class="card__link-wrp">
              <a href="${item.github}" class="card__link">
                <svg class="card__svg" width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12.8992 1.56251C10.2078 1.56046 7.6035 2.51679 5.55296 4.26017C3.50243 6.00355 2.13962 8.42007 1.70868 11.0768C1.27773 13.7336 1.8068 16.457 3.20112 18.7591C4.59543 21.0613 6.76388 22.7918 9.318 23.6406C9.88519 23.7438 10.0914 23.3938 10.0914 23.0938C10.0914 22.825 10.0821 22.1125 10.0758 21.1672C6.92581 21.8516 6.26018 19.6484 6.26018 19.6484C5.74456 18.3391 5.00237 17.9922 5.00237 17.9922C3.97425 17.2891 5.0805 17.3031 5.0805 17.3031C6.218 17.3828 6.81487 18.4703 6.81487 18.4703C7.82581 20.2016 9.46644 19.7016 10.1117 19.4109C10.2149 18.6797 10.5086 18.1797 10.8305 17.8969C8.31487 17.6109 5.67112 16.6391 5.67112 12.2984C5.65477 11.173 6.0728 10.0845 6.83831 9.25938C6.72112 8.97188 6.33206 7.82188 6.94769 6.25938C6.94769 6.25938 7.90081 5.95626 10.0633 7.42188C10.9877 7.1705 11.9413 7.04231 12.8992 7.04063C13.8572 7.04243 14.8108 7.17062 15.7352 7.42188C17.8977 5.95626 18.8477 6.26094 18.8477 6.26094C19.4664 7.82032 19.0774 8.97188 18.9602 9.25938C19.6867 10.0516 20.1242 11.0609 20.1242 12.2984C20.1242 16.65 17.4758 17.6078 14.9524 17.8875C15.3586 18.2375 15.7211 18.9297 15.7211 19.9859C15.7211 21.5016 15.7071 22.7219 15.7071 23.0938C15.7071 23.3969 15.9117 23.75 16.4867 23.6391C19.0403 22.7892 21.2079 21.0579 22.6013 18.7553C23.9946 16.4527 24.5226 13.7293 24.0907 11.0728C23.6589 8.41639 22.2953 6.00048 20.2444 4.25785C18.1934 2.51522 15.5906 1.55972 12.8992 1.56251Z" />
                </svg>
              </a>
          </div>
        </li>
    `);
});

// + Один варіант відображення (але ховер не пряцюе)
// <a href="${item.github}" class="card__link">
//     <img class="card__image" src="${svgGitHumIcon}" alt="github">
//   </a>
// </li>
//========================================================================================================================================================

//Theme 

const switchDarkLight = document.querySelector("#switch");

switchDarkLight.oninput = () => {
    if (switchDarkLight.checked == true) {
        document.querySelector("body").classList.add("dark");
    } else {
        document.querySelector("body").classList.remove("dark");
    }
};

switchDarkLight.addEventListener('click',() => {
    const btnSun = document.querySelector('.svg-sun');
    const btnMoon = document.querySelector('.svg-moon');

    if (switchDarkLight.checked == true) {
        btnSun.style.fill = '#575663';
        btnMoon.style.fill = '#FFFFFF';
    } else {
        btnSun.style.fill = '#3860F9';
        btnMoon.style.fill = '##D9D8E5';
    }
});



//========================================================================================================================================================

//TYPED
let typed = new Typed('#typed', { // Тут id того блока, в которм будет анимация
    stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
    typeSpeed: 70, // Скорость печати
    startDelay: 500, // Задержка перед стартом анимации
    backSpeed: 50, // Скорость удаления
    loop: false // Указываем, повторять ли анимацию
});

//========================================================================================================================================================

