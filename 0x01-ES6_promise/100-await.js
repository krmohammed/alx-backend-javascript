import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  const user = await createUser();
  const photo = await uploadPhoto();

  return { photo, user };
}

export default asyncUploadUser;
