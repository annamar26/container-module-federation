import { observables } from "./observables";
import { activitiesOperations } from "./observables";

export async function generalFetch({ path, method, body }) {
  const res = await fetch("http://localhost:6500/" + path, {
    method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!body) delete res.body;
  return res.json();
}

export const calendarData = async () => {
  const fData = await generalFetch({
    path: "nova-api/activities",
    method: "GET",
  });
  return fData;
};

export const modalData = async () => {
  const fData = await generalFetch({
    path: "nova-api/projects",
    method: "GET",
  });
  return fData;
};

export const deleteActivity = () =>
  generalFetch({
    path: `nova-api/activities/${activitiesOperations.activityToDelete._id}`,
    method: "DELETE",
  })
    .then((res) => {
      observables.snackbar$.publish({
        message: res.message,
        type: "default",
        success: true,
      });
      observables.getApi$.publish("GET");
    })
    .catch(() => {
      observables.snackbar$.publish({
        message: "Something went wrong, please try again",
        type: "default",
        success: false,
      });
    });
