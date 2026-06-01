import { useState } from "react"
//import axios from "axios"
import API from "../services/api"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"


function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const handleSubmit = async (e) => {

    e.preventDefault()
    try{
      const res = await API.post(
        "/auth/login",
        {
          email,
          password
        }
      )

      localStorage.setItem(
        "token",
        res.data.token
      )

      //alert("Login Success")

      navigate("/dashboard")
    }
    catch (err) {
        setError(
          err.response?.data?.message ||
          "Login failed"
        )
    }
  }

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-cyan-400 to-slate-900">

    <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md">

      <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
        Welcome Back
      </h1>

      <p className="text-center text-gray-500 mb-6">
        Sign in to continue
      </p>

      {
        error && (
          <div
            className="
              bg-red-100
              text-red-700
              p-3
              rounded
              mb-4
            "
          >
            {error}
          </div>
        )
      }

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          placeholder="Email"
          className="
            w-full
            px-4
            py-3
            border
            rounded-xl
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="
            w-full
            px-4
            py-3
            border
            rounded-xl
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          type="submit"
          className="
            w-full
            bg-blue-600
            text-white
            py-3
            rounded-xl
            hover:bg-blue-500
            transition
            font-semibold
          "
        >
          Login
        </button>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-semibold"
          >
            Register
          </Link>
        </p>
      </form>

    </div>

  </div>
)
}

export default Login