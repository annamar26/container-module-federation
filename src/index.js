console.log("hola");

const target = document.getElementById("root");
// const renderer = import('modal/Renderer')
const angular = import("calendar/Component");

// renderer.then(res=> res.renderInVanilla(target))
angular.then((res) => {
 

  console.log(res)
});
