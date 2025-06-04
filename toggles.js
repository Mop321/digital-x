const menu1 = document.getElementById('menu-toggle');
const menu2 = document.querySelector('.Nav-menu');



menu1.onclick = function(){
  menu1.classList.toggle('is-active');
  menu2.classList.toggle('active');
}


const reviews = [
  '"שירות אדיב ומקצועי, מחירים זולים ממליצה בחום." - Tania',
  '"פתרו לי בעיה שהרבה לא הצליחו!" - יוסי',
  '"אחלה אנשים ואחלה שירות!" - נועה'
];
 /* הערך של המילים המתחלפות */
 
 let i = 0;

 setInterval(() =>{
  document.getElementById('review').innerText = reviews[i];
  i = (i +1) % reviews.length;
 },5000);   


 // מפעיל את AOS ברגע שהדף נטען
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800, // משך האנימציה במילישניות
    once: false     // הפעלת האנימציה רק פעם אחת
  });
});