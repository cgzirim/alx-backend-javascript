import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto
    .then((response) => {
      console.log(response.body);
    })
    .catch(Error('Signup system offline'));

  createUser
    .then((response) => {
      console.log(response.firstName, response.lastName);
    })
    .catch(Error('Signup system offline'));
}
