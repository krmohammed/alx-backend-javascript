import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then((response) => {
      const [user, photo] = response;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
