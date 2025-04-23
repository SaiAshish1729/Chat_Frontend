// import './App.css'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Login } from "./store/slice/user/user.slice";
import { loginUserThunk } from "./store/slice/user/user.thunk";

function App() {
  const state = useSelector(state => state.userReducer.isAuthenticated);
  console.log(state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginUserThunk())
  }, [])

  return (
    <>

    </>
  )
}

export default App
