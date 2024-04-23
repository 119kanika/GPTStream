/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { LOGO } from "../utils/Constant";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      })
  };


  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          const {uid, email, displayName, photoURL} = user;
          // update store
          dispatch(addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          }))

          //redirect
          navigate("/browse")

        } else {
          // User is signed out
          dispatch(removeUser())
        //   redirect 
        navigate("/")
        }
      });

      //unsubscribe when component unmounts
      return () => {unsubscribe()}
}, [])


  return (
    <div className="absolute z-10 w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt=""
      />

      {user &&
        <div className="flex flex-row p-4 relative group cursor-pointer">
          <img
            className="w-12 h-12 hover:bg-slate-400 mr-4"
            src={user?.photoURL}
            alt="user-icon"
          />

          <div className=" hidden group-hover:block">
            <div className="mt-2 flex flex-row">
              <button
                onClick={handleSignOut}
                className="font-bold mr-4 text-white"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Header;
