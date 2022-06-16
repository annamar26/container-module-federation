import { Observable } from 'windowed-observable';
const { generalFetch } = require('./app');
const target = document.getElementById('rootReact');
const renderer = import('modal/Renderer');
const bootstrap = import('calendar/Bootstrap');
/* const vanillaButton = import("button/Button");
const pomodoro = import("pomodoro/Pomodoro"); */
const calendarObservable = new Observable('calendar-date');

const apiObservable = new Observable('api-observable')
const activityToDeleteObservable = new Observable('activity-to-delete')
const deleteObservable = new Observable('delete-observable')
const snackbarObservable = new Observable('snackbar-observable')
let activityToDelete = {}
activityToDeleteObservable.subscribe((res)=>{
  activityToDelete = res
 
})

deleteObservable.subscribe(()=>{
generalFetch({
path: `nova-api/activities/${activityToDelete._id}`,
method: 'DELETE',

}).then((res)=>{
  snackbarObservable.publish({message: res.message, type:'default', success:true})
   apiObservable.publish('GET')
}).catch(()=>{
  snackbarObservable.publish({message: "Something went wrong, please try again", type:'default', success:false})
})})


// peticion y guardado en localstorage
const calendarData = async () => {
  const fData = await generalFetch({
    path: 'nova-api/activities',
    method: 'GET',
  });
  return fData;
};

const modalData = async () => {
  const fData = await generalFetch({
    path: 'nova-api/projects',
    method: 'GET',
  });

  return fData;
 
};

renderer.then(async (res) => {
  
  res.renderInVanilla(target, await modalData(), generalFetch);
});
/* vanillaButton.then((res) => {
  const { button } = res.buttonF();
  document.getElementById("rootVanilla").append(button);
}); */

bootstrap
  .then(async (res) => {
    const { calendar, button } = res.component();
    const target2 = document.getElementById('rootAngular');

    /* // peticion y guardado en localstorage
    generalFetch({ path: "nova-api/activities", method: "GET" })
      .then((res) => {
        window.localStorage.setItem("activities", JSON.stringify(res));
        calendar.srcData = JSON.parse(
          window.localStorage.getItem("activities")
          );
        })
        .catch((err) => console.log(err)); */

    calendar.srcData = await calendarData();
    apiObservable.subscribe(async()=>{
      calendar.srcData = await calendarData();
    })
    calendar.currentDate = new Date();
    calendarObservable.subscribe((date) => {
      calendar.currentDate = date;
    });
    button.style.position = 'fixed';
    button.style.bottom = '80px';
    button.style.right = '100px';
    target2.append(calendar, button);
  })
  .catch((err) => console.log(err.message));

/* pomodoro.then(res=>{
 console.log(res)
res.mount('#rootVue')
}) */
