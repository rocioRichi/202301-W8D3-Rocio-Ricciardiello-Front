import { SyntheticEvent } from "react";
import { RegisterData } from "../../models/user";
import { UserApiRepo } from "../../services/repository/users.api.repo";
import {firebase/app} from "firebase/app";
import { initializeApp } from "firebase/app";


export function Register() {
  const repo = new UserApiRepo();



    const formNewUser = ev.currentTarget;
    // NO se hace con document.querySelector
    // const formNewUser = document.querySelector("form") as HTMLFormElement;

    const fileUserPicture = (formNewUser[3] as HTMLInputElement).files?.item(0);

    if (fileUserPicture) {
      pictureName = `${(formNewUser[0] as HTMLFormElement).value}.png`;

      const storageRef = ref(Storage, pictureName);

      await uploadBytes(storageRef, fileUserPicture);

      urlUserPicture = await getDownloadURL(storageRef);

      pictureName = "";
    }



  const handleSubmit = (ev: SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formElement = ev.currentTarget;
    const formData: RegisterData = {
      firstName: (formElement[0] as HTMLFormElement).value,
      lastName: (formElement[1] as HTMLFormElement).value,
      email: (formElement[2] as HTMLFormElement).value,
      passwd: (formElement[3] as HTMLFormElement).value,
      snapUrl: (formElement[4] as HTMLFormElement).value,
    };

    repo.createUser({ ...formData, enemies: [], friends: [] });
    formElement.reset();
  };


   const firebaseConfig = {
     apiKey: "AIzaSyBDajFPJQP1fOh-Mv-pF54pMeV8bmHfLUg",

     authDomain: "coders2023-finalproject.firebaseapp.com",

     projectId: "coders2023-finalproject",

     storageBucket: "coders2023-finalproject.appspot.com",

     messagingSenderId: "1014248134970",

     appId: "1:1014248134970:web:ab0fafe010598e137b9803",
   };

   firebase.initializeApp(firebaseConfig);
   console.log(firebase);
   function uploadImage() {
     const ref = firebase.storage().ref();
     const file = document.querySelector("#photo").files[0];
     const name = +new Date() + "-" + file.name;
     const metadata = {
       contentType: file.type,
     };
     const task = ref.child(name).put(file, metadata);
     task
       .then((snapshot) => snapshot.ref.getDownloadURL())
       .then((url) => {
         console.log(url);
         alert("image uploaded successfully");
         document.ev("#image").src = url;
       })
       .catch(console.error);
   }
   const errorMsgElement = document.querySelector("span#errorMsg");

  return (
    <form onSubmit={handleSubmit}>
      <div className="formGroup">
        <label htmlFor="firstName">Name</label>
        <input type="text" id="firstName" name="firstName" />
      </div>
      <div className="formGroup">
        <label htmlFor="Lastname">Last name</label>
        <input type="text" id="lastname" name="lastname" />
      </div>
      <div className="formGroup">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="formGroup">
        <label htmlFor="passwd">Password</label>
        <input type="password" id="passwd" name="passwd" />
      </div>
      <div className="formGroup">
        <label htmlFor="snapurl">Image</label>
        <input type="file" id="photo" name="snapurl" />
        <button id="upload" onClick={uploadImage()}>
          Upload Image
        </button>
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
}
