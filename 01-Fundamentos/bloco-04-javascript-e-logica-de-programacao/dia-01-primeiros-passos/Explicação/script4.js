 const currentHour = 4;
 let message = ''

 if (currentHour >= 22) {
  console.log ("Não deveríamos comer nada, é hora de dormir"), message
 } else if (currentHour >= 18 && currentHour < 22) {
  console.log ("Rango da noite, vamos jantar :D"), message
 } else if (currentHour >= 14 && currentHour < 18) {
  console.log ("Vamos fazer um bolo pro café da tarde?"), message
 } else if (currentHour >= 11 && currentHour < 14) {
  console.log ("Hora do almoço!!!"), message
 } else if (currentHour >= 4 && currentHour < 11) {
  console.log ("Hmmm, cheiro de café recém passado"), message
 }

 console.log(message)