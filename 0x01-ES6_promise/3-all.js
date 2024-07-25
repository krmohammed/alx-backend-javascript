import { creatUser, uploadPhoto } from "./utils.js";

export default function handleProfileSignup() {
  Promise.all([creatUser(), uploadPhoto()])
    .then((response) => {
      console.log(
        `${response[1].body} ${response[0].firstName} ${response[0].lastName}`
      );
    })
    .catch(() => console.log('Signup system offline'));
}
