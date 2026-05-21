import { useNavigate } from "react-router-dom"

function Navbar() {

    const navigate = useNavigate()

    const logout = () => {

        localStorage.removeItem("token")

        navigate("/login")
    }

    return (

        <nav
            className="
                bg-white/70
                backdrop-blur-md
                border
                border-white/20
                px-6
                py-4
                flex
                justify-between
                items-center
                mb-6
            "
        >

        <div className="flex items-center gap-3">

        <div
            className="
            w-12 h-12
            rounded-xl
            bg-blue-600
            flex items-center justify-center
            text-white
            "
        >
            🛡️
        </div>

        <h1 className="text-3xl font-bold text-slate-800">
            Surveillance Dashboard
        </h1>

        </div>
            <button
                onClick={logout}
                className="bg-red-600 px-4 py-2 rounded-xl text-white hover:bg-red-700 transition"
            >
                Logout
            </button>

        </nav>

    )
}

export default Navbar