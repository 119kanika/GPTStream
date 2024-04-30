/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { LOGO } from "../utils/Constant";
import { toggleGPTSearchView } from "../utils/GPTSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const [searchClick, setSearchClick] = useState(false)

  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        // update store
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        //redirect
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        //   redirect
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleGPTSearch = () => {
    //toggle gptsearch
    dispatch(toggleGPTSearchView());
    if(searchClick == false)    
    setSearchClick(true)
    
    if(searchClick == true)    
    setSearchClick(false)
  };


   return (
  <div className="absolute top-0 z-10 w-screen px-2 sm:px-8 sm:py-2 py-10  bg-gradient-to-b from-black flex  justify-between bg-black sm:bg-transparent">
    <img className="w-18 h-12 sm:h-20 sm:w-44" src={LOGO} alt="" />

    {user && (
      <div className=" flex flex-row p-2 relative group cursor-pointer">
        <div>
        <button
          onClick={handleGPTSearch}
          className="bg-red-600 hover:bg-red-500 rounded-md text-white py-1 px-1 sm:py-2 sm:px-4 mx-2 ">
          {searchClick ? "Home Page" : "Search"}
        </button>
        </div>


        <div>
          <img
            className="w-8 h-8 sm:w-12 sm:h-12 hover:bg-slate-400 mr-0 sm:mr-4"
            src={user?.photoURL}
            alt="user-icon"
          />

          <div>
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
        </div>
      </div>
    )}
  </div>
);

  
  
};

export default Header;



