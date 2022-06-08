import { Observable } from "windowed-observable";
const { generalFetch } = require("./app");
const target = document.getElementById("rootReact");
const renderer = import("modal/Renderer");
const bootstrap = import("calendar/Bootstrap");
/* const vanillaButton = import("button/Button");
const pomodoro = import("pomodoro/Pomodoro"); */
const calendarObservable = new Observable("calendar-date");

// peticion y guardado en localstorage
const data = async()=>{
  const fData = await generalFetch({ path: "nova-api/activities", method: "GET" })
  return fData
};

renderer.then((res) => res.renderInVanilla(target));
/* vanillaButton.then((res) => {
  const { button } = res.buttonF();
  document.getElementById("rootVanilla").append(button);
}); */

bootstrap
  .then(async (res) => {
    const { calendar, button } = res.component();
    const target2 = document.getElementById("rootAngular");

    /* // peticion y guardado en localstorage
    generalFetch({ path: "nova-api/activities", method: "GET" })
      .then((res) => {
        window.localStorage.setItem("activities", JSON.stringify(res));
        calendar.srcData = JSON.parse(
          window.localStorage.getItem("activities")
          );
        })
        .catch((err) => console.log(err)); */

    calendar.srcData = await data();
    calendar.currentDate = new Date();
    calendarObservable.subscribe((date) => {
      calendar.currentDate = date;
    });
    button.style.position = "fixed";
    button.style.bottom = "80px";
    button.style.right = "100px";
    target2.append(calendar, button);
  })
  .catch((err) => console.log(err.message));

/* pomodoro.then(res=>{
 console.log(res)
res.mount('#rootVue')
}) */
