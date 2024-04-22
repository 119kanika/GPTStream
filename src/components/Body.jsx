import Login from "./Login"
import Browse from "./Browse"
import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/Firebase"
import { useDispatch } from "react-redux"
import {addUser, removeUser} from "../utils/UserSlice"

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ]);


    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid, email, displayName, photoURL} = user;
              // update store
              dispatch(addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL
              }))

              //redirect

            } else {
              // User is signed out
              dispatch(removeUser())
            //   redirect 
            }
          });
    }, [])


  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body