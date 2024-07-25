export default function signUpUser(firstName, lastName) {
  return new Promise(function (resolve, reject) {
    resolve({ firstName, lastName });
  });
}
