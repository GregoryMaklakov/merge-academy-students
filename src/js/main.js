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

const getPerson = students.map((item) => {

    return list.insertAdjacentHTML('afterbegin', `
    <li class="student__list card">
          <img class="card__photo" src="${item.photo}" alt="avatar"></img>
          <h3 class="card__name">${item.name}</h3>

          <div class="card__image-wrp">
              <img class="card__mail-svg" src="${svgMailIcon}" alt="mail">
              <a href="mailto:" class="card__mail">${item.email}</a>
          </div>

          <a href="${item.github}" class="card__link">
            <img class="card__image" src="${svgGitHumIcon}" alt="github">
          </a>
        </li>
    `);
});

//========================================================================================================================================================

//Theme 
document.querySelector("#switch").oninput = () => {
	if (document.querySelector("#switch").checked == true) {
		document.querySelector("body").classList.add("dark");
	} else {
		document.querySelector("body").classList.remove("dark");
	}
};

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

