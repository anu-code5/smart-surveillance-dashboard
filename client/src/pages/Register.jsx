import { useState } from "react"
import axios from "axios"

function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      )

      console.log(res.data)

      alert("Registration Successful")

    } catch (err) {

      console.log(err)

    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-cyan-400 to-black-500">

  <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">

    <h1 className="text-3xl font-bold text-center mb-6">
      Create Account
    </h1>

    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >

      <input
        name="name"
        placeholder="Full Name"
        className="w-full p-3 border rounded-xl"
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        className="w-full p-3 border rounded-xl"
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        className="w-full p-3 border rounded-xl"
        onChange={handleChange}
      />

      <button
        className="
          w-full
          bg-blue-600
          text-white
          py-3
          rounded-xl
          hover:bg-blue-500
          transition
        "
      >
        Register
      </button>

    </form>

  </div>

</div>
)
}

export default Register