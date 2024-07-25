import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((response) => {
    return response.map((resp) => ({
      status: resp.status,
      value: resp.status === 'fulfilled' ? resp.value : resp.reason,
    }));
  });
}
