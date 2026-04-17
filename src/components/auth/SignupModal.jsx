import { useState, useEffect} from "react";
import "../../styles/global.css";

export default function SignupModal({ onClose , openLogin, closeSignup}) {
  const [showToast, setShowToast] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    month: "",
    day: "",
    year: "",
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(form));
  }, [form]);

  const handleNext = () => {
    if (!isFormComplete) return;
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      closeSignup();
      openLogin();
    }, 2000);
  };

  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const years = [];
  for (let year = 2026; year >= 1900; year--) {
    years.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isFormComplete =
    form.name &&
    form.email &&
    form.username &&
    form.password &&
    form.month &&
    form.day &&
    form.year;

  return (
    <div className="fixed inset-0 bg-[#5B708366] flex items-center justify-center z-50">
      {showToast && (
        <div className="fixed top-3 left-1/2 -translate-x-1/2 bg-[#1d9bf0] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg z-[100] transition-all">
          Account created successfully!
        </div>
      )}

      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="bg-black w-full max-w-2xl rounded-2xl px-20 pb-10 pt-6 relative shadow-xl border border-gray-800 z-10">
        <button
          onClick={onClose}
          className="absolute top-[10px] left-[10px] w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-[#181919] hover:text-white cursor-pointer"
        >
          ✕
        </button>

        <div className="flex justify-center mb-6">
          <img className="h-7" src="TwitterLogoWhite.svg" alt="logo" />
        </div>

        <h2 className="text-4xl font-bold mb-8">Create your account</h2>

        <div className="flex flex-col gap-3.5">
          
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
            className="w-full bg-black border border-gray-700 rounded-md px-4 py-4 text-lg focus:outline-none focus:border-gray-500"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full bg-black border border-gray-700 rounded-md px-4 py-4 text-lg focus:outline-none focus:border-gray-500"
          />

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

          <div className="mt-2">
            <h4 className="text-lg font-bold">Date of birth</h4>
            <p className="text-sm text-[#505458] mt-1 max-w-md leading-4">
              This will not be shown publicly. Confirm your own age, even if this
              account is for a business, a pet, or something else.
            </p>

            <div className="flex gap-4 mt-4">
              
              <select
                name="month"
                value={form.month}
                onChange={handleChange}
                className="w-1/2 bg-black border border-gray-700 rounded-md px-4 py-4 text-gray-400 focus:outline-none focus:border-gray-500"
              >
                <option value="">Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>

              <select
                name="day"
                value={form.day}
                onChange={handleChange}
                className="w-1/4 bg-black border border-gray-700 rounded-md px-4 py-4 text-gray-400 focus:outline-none focus:border-gray-500"
              >
                <option value="">Day</option>{days}</select>

              <select
                name="year"
                value={form.year}
                onChange={handleChange}
                className="w-1/4 bg-black border border-gray-700 rounded-md px-4 py-4 text-gray-400 focus:outline-none focus:border-gray-500"
              >
                <option value="">Year</option>
                {years}
              </select>

            </div>
          </div>

          <button
            onClick={handleNext}
            className={`
              mt-10 py-4 rounded-full text-lg font-bold
              ${
                isFormComplete
                  ? "bg-white text-black hover:bg-gray-200 cursor-pointer"
                  : "bg-[#787a7a] text-black cursor-not-allowed"
              }
            `}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}