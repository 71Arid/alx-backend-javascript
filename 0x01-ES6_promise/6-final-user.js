import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(filename);
  return Promise.allSettled([user, photo])
    .then((vs) => {
      return vs.map((v) => {
        return {
	  status: v.status,
          value: v.status === 'fulfilled' ? v.value : String(v.reason),
	};
      });
    });
}
