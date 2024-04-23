# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Constructing the App

- npm create vite@latest
- configure tailwind for vite
- Header
- Login form and sign up form
- Validation for forms
 - useref hook
- firebase setup and deployment
- create signup and login in firebase
- create store with redu
- update store/userSlice with user info after they sign up
- implement sign out
- update profile
- fetch data from TMDB 
- bugfix of redirect user to browse page if logged in or sign up page if logged out.
- unsubscribed to the onAuthStateChanged callback.
- register for tmdb api and create an app and get access token.
- Get Data from tmdb now playing movies list api


# Features
- Browse page after authentication
  - Header
  - Main Movie
    - Trailer in Bg
    - Title and Description
    - Movie suggestion
      - movie list and vertical scroll

- Browser page for logged out users
  - Login/signup page
    - redirect to browser page

- GPT
  - search bar
  - movie suggestions


# Browse page structure
- main video container 
  (needs data of a movie with trailer and title)
  - video bg
  - video title

- Movie list container
  - movie * n
    - movieCards * n