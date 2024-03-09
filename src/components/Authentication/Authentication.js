import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth, app } from "../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Authentication() {
  const [authenticatedUser, setAuthenticatedUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const listenAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticatedUser(user);
      } else {
        setAuthenticatedUser(null);
      }
    });
    return () => {
      listenAuth();
    };
  }, []);
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("user signed out");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      {authenticatedUser === null ? (
        <div
          onClick={() => {
            navigate("/Login&Sign-up", { replace: true });
          }}
        >
          Login&Sign-up
        </div>
      ) : (
        <>
          <div onClick={userSignOut}>Sign Out </div>
          <div></div>
        </>
      )}
    </>
  );
}
export default Authentication;
