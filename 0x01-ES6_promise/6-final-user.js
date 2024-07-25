import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((response) => response.map((resp) => (
    {
      status: resp.status,
      value: resp.status === 'fulfilled' ? resp.value : resp.reason,
    }))
  );
}
