import React from "react";

function Welcome({ user }) {
  function hoofdLetters(username) {
    console.log(`username is: ${username}`);
    if (username) {
      return username.toUpperCase();
      console.log("to UpperCase: " + username.toUpperCase());
    } else {
      console.log("username is empty");
    }
  }
  return <div>Welcome {hoofdLetters(user)}</div>;
}

export default Welcome;
