export default function uploadPhoto(filename) {
  return new Promise(function(resolve, reject) {
    reject(`${filename} cannot be processed`)
  });
}
