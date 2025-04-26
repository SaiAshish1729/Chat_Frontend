import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loginUserThunk } from "./store/slice/user/user.thunk";
import { Toaster } from "react-hot-toast";

function App() {
  const state = useSelector(state => state.userReducer.isAuthenticated);
  console.log("isauthenticated : ", state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginUserThunk())
  }, [])

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}

export default App