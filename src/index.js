import { Observable } from "windowed-observable";
const target = document.getElementById("rootReact");
const renderer = import("modal/Renderer");
const bootstrap = import("calendar/Bootstrap");
const vanillaButton = import("button/Button");
const pomodoro = import("pomodoro/Pomodoro");
const calendarObservable = new Observable('calendar-date');


renderer.then((res) => res.renderInVanilla(target));
vanillaButton.then((res) => {
  const { button } = res.buttonF();
  document.getElementById("rootVanilla").append(button);
});


bootstrap
  .then((res) => {
    
    const { calendar, button } = res.component();
    const target2 = document.getElementById("rootAngular");
    calendar.srcData = [
      {
        AccountName: 'Itexico',
        ActivityDate: '2022-05-06T09:35:04',
        ActivityID: 0,
        CategoryName: 'Available',
        Comments: 'string',
        EmployeeID: 0,
        ProjectColor: 'blue',
        ProjectID: 0,
        ProjectName: 'Delivery',
        StepID: 0,
        Task: 'esto es un ticket',
        TypeID: 0,
        value: 5,
        activeInProject: false,
      },
      {
        AccountName: 'Itexico',
        ActivityDate: '2022-05-06T09:35:04',
        ActivityID: 0,
        CategoryName: 'Available',
        Comments: 'string',
        EmployeeID: 0,
        ProjectColor: 'blue',
        ProjectID: 0,
        ProjectName: 'Delivery',
        StepID: 0,
        Task: 'esto es un ticket',
        TypeID: 0,
        value: 5,
        activeInProject: false,
      },
      {
        AccountName: 'Itexico',
        ActivityDate: '2022-05-06T09:35:04',
        ActivityID: 0,
        CategoryName: 'Available',
        Comments: 'string',
        EmployeeID: 0,
        ProjectColor: 'blue',
        ProjectID: 0,
        ProjectName: 'Delivery',
        StepID: 0,
        Task: 'esto es un ticket',
        TypeID: 0,
        value: 5,
        activeInProject: false,
      },
      {
        AccountName: 'Itexico',
        ActivityDate: '2022-05-06T09:35:04',
        ActivityID: 0,
        CategoryName: 'Available',
        Comments: 'string',
        EmployeeID: 0,
        ProjectColor: 'blue',
        ProjectID: 0,
        ProjectName: 'Delivery',
        StepID: 0,
        Task: 'esto es un ticket',
        TypeID: 0,
        value: 5,
        activeInProject: false,
      },
      {
        AccountName: 'Itexico',
        ActivityDate: '2022-05-06T09:35:04',
        ActivityID: 0,
        CategoryName: 'Available',
        Comments: 'string',
        EmployeeID: 0,
        ProjectColor: 'blue',
        ProjectID: 0,
        ProjectName: 'Delivery',
        StepID: 0,
        Task: 'esto es un ticket',
        TypeID: 0,
        value: 5,
        activeInProject: false,
      },
    ]
    calendar.currentDate = new Date();
    calendarObservable.subscribe((date) => {
      calendar.currentDate = date;
      console.log(date, calendar.currentDate);
    });
    button.style.position = 'fixed';
    button.style.bottom = '80px';
    button.style.right = '100px';
    target2.append(calendar, button)
  })
  .catch((err) => console.log(err.message));
pomodoro.then(res=>{
 console.log(res)
res.mount('#rootVue')
})