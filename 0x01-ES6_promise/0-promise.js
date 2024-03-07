export default function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    const i = true;
    if (i) {
      resolve();
    } else {
      reject();
    }
  });
  return promise;
}
