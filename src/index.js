console.log("hola");

const target = document.getElementById("root");
const renderer = import("modal/Renderer");
// const angular = import("calendar/Component");
const vanillaButton = import("button/Button");

renderer.then((res) => res.renderInVanilla(target));
/* angular.then((res) => {
  console.log(res);
}); */

vanillaButton.then((res) => res.render(document.getElementById("rootVanilla")));
