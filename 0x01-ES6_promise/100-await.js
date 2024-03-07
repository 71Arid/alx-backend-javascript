import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const obj = await Promise.all([uploadPhoto(), createUser()])
    .then((value) => ({ photo: value[0], user: value[1] }))
    .catch(() => ({ photo: null, user: null }));
  return obj;
}
