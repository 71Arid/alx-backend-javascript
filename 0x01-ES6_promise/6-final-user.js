import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  Promise.all([user, photo]).then(value => {
    return value;
  });
}
