import("./../index.css");
import react from "./../react/react";
import angular from "./../angular/angular";
import vanilla from "./../vanilla/vanilla";
import { observables, activitiesOperations } from "./../observables";
import { deleteActivity } from "../fetch";

export const Home = () => {
  const rootVanilla = document.createElement("div");
  rootVanilla.id = "rootVanilla";
  const rootAngular = document.createElement("div");
  rootAngular.id = "rootAngular";
  const rootReact = document.createElement("div");
  rootReact.id = "rootReact";
  document.getElementById("root").appendChild(rootVanilla);
  document.getElementById("root").appendChild(rootReact);
  document.getElementById("root").appendChild(rootAngular);
  vanilla();
  angular();
  react(rootReact);
  

  observables.activityToDelete$.subscribe((res) => {
    activitiesOperations.activityToDelete = res;
  });

  observables.deleteApi$.subscribe(() => deleteActivity());
};
