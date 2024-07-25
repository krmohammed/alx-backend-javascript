export default function handleResponseFromAPI(promise) {
  promise
    .then(function () {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(function () {
      return new Error();
    });
}
