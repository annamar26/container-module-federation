import react from "./react/react";
import angular from "./angular/angular";
import { observables, activitiesOperations } from "./observables";
import { deleteActivity } from "./fetch";

angular();
react();

observables.activityToDelete$.subscribe((res) => {
  activitiesOperations.activityToDelete = res;
});

observables.deleteApi$.subscribe(() => deleteActivity());


observables.activityToUpdate$.subscribe((res) => {
  activitiesOperations.activityToUpdate = res;
});

observables.updateApi$.subscribe(() => updateActivity());


observables.activityToClone$.subscribe((res) => {
  activitiesOperations.activityToClone = res;
  console.log(activitiesOperations.activityToClone)
});

observables.cloneApi$.subscribe(() => cloneActivity());
