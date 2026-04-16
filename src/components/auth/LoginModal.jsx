import { useState } from "react";
import "../../styles/global.css";

export default function LoginModal({ onClose, openSignup }) {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isFormComplete =
    form.username &&
    form.password

  return (
    <div className="fixed inset-0 bg-[#5B708366] flex items-center justify-center z-50">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="bg-black w-full max-w-2xl rounded-2xl px-20 pb-10 pt-6 relative shadow-xl border border-gray-800 z-10">
        <button
          onClick={onClose}
          className="absolute top-2.5 left-2.5 w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-[#181919] hover:text-white cursor-pointer"
        >
          ✕
        </button>

        <div className="flex justify-center mb-6">
          <img className="h-7" src="TwitterLogoWhite.svg" alt="logo" />
        </div>

        <h2 className="text-4xl font-bold mb-8 mt-6 mx-15">Sign in to X</h2>
        <div className="flex flex-col gap-3.5 mx-15">
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            type="text"
            placeholder="Username"
            className="w-full bg-black border border-gray-700 rounded-md px-4 py-4 text-lg focus:outline-none focus:border-gray-500"
          />

          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="w-full bg-black border border-gray-700 rounded-md px-4 py-4 text-lg focus:outline-none focus:border-gray-500"
          />

          <button
            onClick={() => {console.log(form)}}
            className={`
              mt-10 py-4 rounded-full text-lg font-bold
              ${
                isFormComplete
                  ? "bg-white text-black hover:bg-gray-200 cursor-pointer"
                  : "bg-[#787a7a] text-black cursor-not-allowed"
              }
            `}
          >
            Sign in
          </button>

          <div className="flex justify-center">
            <p>Don't have an account? <button onClick={openSignup} className="text-blue-400 cursor-pointer">Sign up</button></p>
          </div>
          
        </div>
      </div>
    </div>
  );
}