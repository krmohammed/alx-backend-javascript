import { creatUser, uploadPhoto } from "./utils.js";

export default function handleProfileSignup() {
  Promise.all([creatUser(), uploadPhoto()])
    .then((response) => {
      const [user, photo] = response;
      console.log(
        `${photo.body} ${user.firstName} ${user.lastName}`
      );
    })
    .catch(() => console.log('Signup system offline'));
}
