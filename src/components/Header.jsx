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
import { toggleGPTSearchView } from "../utils/GPTSlice";

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


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
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
    return () => { unsubscribe() }


  }, [])


  const handleGPTSearch = () => {
    //toggle gptsearch
    dispatch(toggleGPTSearchView())
    console.log("Toggle clicked");

  }


  return (
    <div className="fixed top-0 z-10 w-screen px-4 sm:px-8 py-2  bg-gradient-to-b from-black flex  justify-between bg-black sm:bg-transparent">
      <img
        className="w-32 sm:w-44"
        src={LOGO}
        alt=""
      />

      {user &&
        <div id="StickyHeader" className=" flex flex-row p-4 relative group cursor-pointer">
          <div>
          <button
            onClick={handleGPTSearch}
            className="bg-red-600 hover:bg-red-500 rounded-md text-white py-2 px-4 mx-2 ">
            Search
          </button>
          </div>

          <div>
            <img
              className="w-12 h-12 hover:bg-slate-400 mr-4"
              src={user?.photoURL}
              alt="user-icon"
            />

<div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>






            {/* <div>
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
            </div> */}
          </div>
        </div>
      }
    </div>
  );
};

export default Header;
