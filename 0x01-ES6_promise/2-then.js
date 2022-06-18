export default function handleResponseFromAPI(promise) {
  let isResolved = false;
  promise.then(() => {
    isResolved = true;
  });

  if (isResolved) {
    console.log('Got a response from the API');
    return { body: 'success', status: 200 };
  }

  console.log('Got a response from the API');
  return Error();
}
