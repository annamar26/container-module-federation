export async function generalFetch({ path, method/* , body */ }) {
  const res = await fetch("http://localhost:6500/" + path, {
    method,
    // body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
//   if (!body) delete res.body
  return res.json();
}

/* export async function getElements() {
  const res = await generalFetch({
    path: "nova-api/activities",
    method: "GET",
  });
  return res;
} */
