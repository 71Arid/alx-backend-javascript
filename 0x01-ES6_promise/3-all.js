import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body;
  let fname;
  let sname;
  uploadPhoto().then((value) => {
    body = value.body;
    return createUser();
  }).then((value) => {
    fname = value.firstName;
    sname = value.lastName;
  }).catch(() => console.log('Signup system offline'));
  console.log(`${body} ${fname} ${sname}`);
}
