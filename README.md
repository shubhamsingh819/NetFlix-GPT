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
<!-- 16. Fetch from TMDB movies  -->


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
