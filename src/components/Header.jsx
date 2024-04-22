/* eslint-disable no-unused-vars */
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute z-10 w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
