import { Observable } from "windowed-observable";

export const observables = {
  calendar$: new Observable("calendar-date"),
  snackbar$: new Observable("snackbar-observable"),
  getApi$: new Observable("api-observable"),

  deleteApi$: new Observable("delete-observable"),
  activityToDelete$: new Observable("activity-to-delete"),

  createApi$: new Observable("create-observable"),
  activityToCreate$: new Observable("activity-to-create"),

  updateApi$: new Observable("update-observable"),
  activityToUpdate$: new Observable("activity-to-update"),

  cloneApi$: new Observable("clone-observable"),
  activityToClone$: new Observable("activity-to-clone"),
};

export const activitiesOperations = {
  activityToDelete: {},
  activityToUpdate: {},
  activityToClone: {},
  activityToCreate: {},
};

export const publications = {
  snackbar: (object) => observabes.snackbar$.publish(object),
  getApi: () => observabes.getApi$.publish('GET'),
};
