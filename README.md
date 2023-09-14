# NetFlix GPT

1. create-react-app
2. configure tailwind css link-> https://tailwindcss.com/docs/guides/create-react-app
3. Header
4. Routing of App
5. Login Form
6. Sign up form
7. Form Validation
8. useRef Hooks
9. firebase setup
10. Deploying our app to production
11. create sign up user account
12. Implement Sign in user api
13. Created redux store with userSlice
14. Implemented sign out features
15. Update profile api call via firebase .
16. BugFix: Signup user displayName and profile picture update.
17. Bugfix: if the user is not logged in redirect/ browse to login page and vice-versa.
18. Unsubscribed to the onAuthStateChange Callback.
19. Add hardcoded values to the constant file -> very important
20. Register TMDB api and create app and get access token
21. Get data from TMDB now playing movies list api.
22. Custom hook for now playing movies.
23. create movieSlice
24. Update store with movies data
25. planning for mainContainer and secondary container
26. fetch data for trailer video
27. update store with trailer video data
28. embeded the youtube video and make it autoplay and mute
29. tailwind classes to make main container look awesome
30. build secondary component.
31. Build secondary component.
32. Build movie list
33. build movie card
34. TMDB image cdn url
35. made the browse page amazing with tailwind css
36. usePopularMoveis custom hook
37. useTopRatedMovies custom hook
38. useTrendingMovies custom hook
39. useUpcomingMovies custom hook
40. useNowPlayingMovies custom hook

# Features we are going to build

0. login and signup page
   sign in /sing up form
   redirect to login page
1. Browse page ony come after authentication
   Header
   Main movie
   trailor in background
   title and description
   movieSuggestions
   movieLists\*n
2. Netflix GPT
   searchBar
   moivieSugestions

<!--
1. How to setUp Redux store.
- use redux toolkit
- istall two libraries
1. npm i -D @reduxjs/toolkit
2.npm i react-redux
- After installing library -> create redux store.
1 Create utils folder and inside util folder create file called appStore.js
inside appStore.js file write code

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: { userReducer },
});

export default appStore;

2. after creating store create slice
for creating anyType of slice use method called createSlice

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

3. after setting store provide store to your root of your application App.js

wrap your component in <Provider store={appStore}> <Body/> </Provider>

4. If you want to fetch anything inside redux store use useSelector hook.

 -->
