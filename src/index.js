import react from "./react/react";
import angular from "./angular/angular";
import vanilla from "./vanilla/vanilla";
import { observables, activitiesOperations } from "./observables";
import { deleteActivity } from "./fetch";

vanilla();
angular();
react();

observables.activityToDelete$.subscribe((res) => {
  activitiesOperations.activityToDelete = res;
});

observables.deleteApi$.subscribe(() => deleteActivity());
