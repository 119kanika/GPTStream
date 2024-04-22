import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validation";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate form data
    const message = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(message);

  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://maven-uploads.s3.amazonaws.com/120386748/projects/netflix%20image.jpg"
          alt="bg image"
          className="bg-cover"
        />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="p-12 bg-black absolute w-1/4 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-700 rounded-lg"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-2 w-full bg-gray-700 rounded-lg"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700 rounded-lg"
        />

        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <p className="text-zinc-400">
              New to Netflix?<span className="text-white">Sign Up Now.</span>
            </p>
          ) : (
            <p className="text-zinc-400">
              Already registered?{" "}
              <span className="text-white">Sign In Now.</span>
            </p>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
