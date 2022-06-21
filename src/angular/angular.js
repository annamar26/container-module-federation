import { observables } from "../observables";
import { calendarData } from "../fetch";

function buttonStyles(button) {
  button.style.position = "fixed";
  button.style.bottom = "80px";
  button.style.right = "100px";
}

const bootstrap = import("calendar/Bootstrap");

const angular = () =>
  bootstrap
    .then(async (res) => {
      const { calendar, button } = res.component();
      calendar.srcData = await calendarData();
      observables.getApi$.subscribe(async () => {
        calendar.srcData = await calendarData();
      });
      calendar.currentDate = new Date();
      observables.calendar$.subscribe((date) => {
        calendar.currentDate = date;
      });
      buttonStyles(button);
      document.getElementById("rootAngular").append(calendar, button);
    })
    .catch((err) => console.log(err.message));

export default angular;
