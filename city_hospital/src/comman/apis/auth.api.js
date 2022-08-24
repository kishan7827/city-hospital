import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

export const signUpdataapi = (values) => {
  console.log('signUpapidata :', values);

  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Userdata : ", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("ErrorMessage : ", errorMessage);
        console.log("ErrorCode : ", errorCode);
      });
  })
}