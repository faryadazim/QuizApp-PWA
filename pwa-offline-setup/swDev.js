export default function swDev() {
  let swDev = `${process.env.PUBLIC_URL}/service-worker.js`;
  console.log(swDev);
  navigator.serviceWorker
    .register(swDev)
    .then((result) => {
      console.log("Result", result.scope);
    })
    .catch((err) => console.log("Error at SW Config", err));
}
