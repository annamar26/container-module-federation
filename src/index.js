console.log("hola");

const target = document.getElementById("root");
const renderer = import("modal/Renderer");
// const angular = import("calendar/Dist");
const bootstrap = import("calendar/Bootstrap");
const vanillaButton = import("button/Button");

// renderer.then((res) => res.renderInVanilla(target));
// vanillaButton.then((res) => res.render(document.getElementById("rootVanilla")));

bootstrap
  .then((res) => {
    const target2 = document.getElementById("rootAngular");
    const el = res.component();
    el.srcData = [
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
    target2.append(el)
  })
  .catch((err) => console.log(err.message));
