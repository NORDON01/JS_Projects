const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
/* =========================== EXERCICES AVEC LES DATES ================ */
const log = console.log;
const giveaway = document.querySelector('.giveaway');
//log(giveaway);
const deadline = document.querySelector('.deadline');
//log(deadline);
const items = document.querySelectorAll('.deadline-format h4');
log(items);

/* SET DATE */
let futureDate = new Date(2025, 4, 24, 11, 30, 0) /* An, mois, jour, hh, mm, ss */
log(futureDate);
/* Easy */
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();  /* jour du mois != getDay(), jour de semaine*/
log(date);
/* Not so easy */
const monthNumber = futureDate.getMonth(); /* A number */
const month = months[monthNumber];
log(month);
const weekdayNumber = futureDate.getDay();
const weekDay = weekdays[weekdayNumber];
log(weekDay);                       /* jour de la semaine  */

giveaway.textContent = `Give away ends on ${weekDay} ${date} ${month},${year}, 
${hours}:${minutes} am`;
log(giveaway.textContent);



/* CALCULATE REMAINING TIME*//* 
//1s = 1000ms; 1mn = 60s; 1hr = 60mn; 1d = 24hrs

const futureTime = futureDate.getTime();
//log('Date limite: ' + futureTime);            /* In milliseconds */
const presentTime = new Date(); 

 /* ============================= FONCTION ============================= */

//Fonction calcul du temps  restant à une date
let remainingTime = function(futureDate){
  let futureTime = futureDate.getTime();
  log('Date limite: ' + futureTime); 
  let presentTime = (new Date()).getTime();
  log('Date du jour: ' + presentTime)
  
//Transforme délai en jrs hrs mins et seconds
t = futureTime- presentTime;
log(`T:${t}`)
const day = 24 * 60 * 60 * 1000; const hr = 60 * 60 *1000;const mn = 60000;
let days = Math.floor(t/day);// log(`Jours entiers restant ${days}`);
let tRestant = t%day;        //log(`Heures restantes en ms: ${tRestant}`);
//log(`ctrl: ${(days*day + tRestant)}`)
let hrs = Math.floor(tRestant/hr); //log(`Heures entières: ${hrs}`);
tRestant = tRestant%hr; //log(`Minutes restantes en ms: ${tRestant}`);
let mns = Math.floor(tRestant/mn); //log(`Minutes entières ${mns}`);
tRestant = tRestant%mn; //log(`Secondes restantes en ms: ${tRestant}`);
let secondes = tRestant /1000; //log(`Secondes: ${secondes}`);
secondes = Math.ceil(secondes);
let controle = secondes*1000 + mns*60000 + hrs*hr + days*day;
log(`Controle: ${controle}`);

//Affichage du temps restant "t"
let values = [days, hrs, mns,secondes];
items.forEach(function(item, index){  //index: optional donne le rang (0 à 3)
  item.textContent = values[index];
})
}//FIN 1ERE BOUCLE remainingTime

/* LANCEMENT DE LA BOUCLE calcul */
//let calcul = function(){remainingTime(new Date(2026, 10, 15, 12, 0, 0));}
setInterval(calcul, 1000);


