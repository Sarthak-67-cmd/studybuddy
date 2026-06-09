import { auth } from "./firebase.js";

import {
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const provider = new GoogleAuthProvider();

window.googleLogin = async function () {

  try {

    const result = await signInWithPopup(
      auth,
      provider
    );

    alert(
      "Welcome " +
      result.user.displayName
    );

    window.location.href =
      "dashboard.html";

  } catch (e) {

    alert(e.message);
    console.log(e);

  }

};
