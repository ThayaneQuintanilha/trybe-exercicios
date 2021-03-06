function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.
//CRIAR FUNÇÃO DE DIAS DO MÊS
function dayOfTheMonth () {
  let dayElement = document.querySelector('#days');

  for (let index in decemberDaysList) {

    let day = decemberDaysList[index]
    let dayItem = document.createElement('li');

    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      dayElement.appendChild(dayItem)
    }

    else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      dayElement.appendChild(dayItem);
    }

    else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      dayElement.appendChild(dayItem)
    }
    
    else {
      dayItem.className = 'day';
      dayItem.innerHTML = day;
      dayElement.appendChild(dayItem);
    }
  }
}

dayOfTheMonth()

// - 2

function createHolidayButton (buttonName) {
  let createButton = document.createElement('button');
  let divConteiner = document.querySelector('.buttons-container')
  createButton.innerText = buttonName;
  createButton.id = 'btn-holiday';
  divConteiner.appendChild(createButton);
}
createHolidayButton('feriados')

// - 3

let classHoliday = document.querySelectorAll('.holiday');

let btnHoliday = document.getElementById('btn-holiday')
btnHoliday.addEventListener("click", function(){
  for (let day of classHoliday) {
    day.style.color = 'green'
  }
});