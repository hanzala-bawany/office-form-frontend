import { useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { toast } from "react-toastify"

const HomeParent = () => {
    // Outlet
  const isUserLogin = JSON.parse(localStorage.getItem("loginUserInfo"))

  useEffect(() => {
    if(!isUserLogin) toast.warning("You have to login first")
  },[isUserLogin])

    return (
      <>
 {     isUserLogin ? <Outlet /> : <Navigate to="/login" />   }
      </>
  )
}

export default HomeParent
