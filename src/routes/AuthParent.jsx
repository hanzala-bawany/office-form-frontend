import { useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { toast } from "react-toastify"


const AuthParent = () => {

const isUserLogin = JSON.parse(localStorage.getItem("loginUserInfo"))

 useEffect(() => {
    if(isUserLogin) toast.warning("You are already logged in")
  },[isUserLogin])

  return (
   <>
  { isUserLogin ? <Navigate to="/" /> : <Outlet />    }
   </>
  )
}

export default AuthParent
