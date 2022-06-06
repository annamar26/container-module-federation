import { Observable } from "windowed-observable";
import { getElements } from "./app";
/* const target = document.getElementById("rootReact");
const renderer = import("modal/Renderer"); */
const bootstrap = import("calendar/Bootstrap");
/* const vanillaButton = import("button/Button");
const pomodoro = import("pomodoro/Pomodoro"); */
const calendarObservable = new Observable('calendar-date');


// peticion y guardado en localstorage

getElements().then(res => {
  console.log(res)
  window.localStorage.setItem('activities', JSON.stringify(res))
});

/* renderer.then((res) => res.renderInVanilla(target));
vanillaButton.then((res) => {
  const { button } = res.buttonF();
  document.getElementById("rootVanilla").append(button);
}); */
let info = []
bootstrap
  .then(async (res) => {
    const { calendar, button } = res.component();
    const target2 = document.getElementById("rootAngular");
    
    calendar.currentDate = new Date();
    calendarObservable.subscribe((date) => {
      calendar.currentDate = date;
      console.log(date, calendar.currentDate);
    });
    window.addEventListener('storage', () => {
      info.concat(JSON.parse(window.localStorage.getItem('activities')));
      calendar.srcData = info;
      console.log(info)
    });
    button.style.position = 'fixed';
    button.style.bottom = '80px';
    button.style.right = '100px';
    target2.append(calendar, button)
  })
  .catch((err) => console.log(err.message));

/* pomodoro.then(res=>{
 console.log(res)
res.mount('#rootVue')
}) */
