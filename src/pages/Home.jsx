import React, { useState } from "react";
import "../styles/global.css";
import SignupModal from "../components/auth/SignupModal";
import LoginModal from "../components/auth/LoginModal";

const mainPageLinks = [
  { name: "About", path: "/" },
  { name: "Download the X app", path: "/" },
  { name: "Grok", path: "/" },
  { name: "Help Center", path: "/" },
  { name: "Terms of Service", path: "/" },
  { name: "Privacy Policy", path: "/" },
  { name: "Cookie Policy", path: "/" },
  { name: "Accessibility", path: "/" },
  { name: "Ads info", path: "/" },
  { name: "Blog", path: "/" },
  { name: "Careers", path: "/" },
  { name: "Brand Resources", path: "/" },
  { name: "Advertising", path: "/" },
  { name: "Marketing", path: "/" },
  { name: "X for Business", path: "/" },
  { name: "Developers", path: "/" },
  { name: "News", path: "/" },
  { name: "Settings", path: "/" },
  { name: "© 2026 X Corp.", path: "/" },
];

export default function Home() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col">
      <div className="flex md:hidden justify-center pt-8 pb-4">
        <img className="w-10 h-10" src="TwitterLogoWhite.svg" alt="logo" />
      </div>

      <div className="flex flex-col md:flex-row flex-1">
        <div className="hidden md:flex w-1/2 items-center justify-center">
          <img className="w-[24rem]" src="TwitterLogoWhite.svg" alt="logo" />
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-8 md:py-16">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Happening now
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Join today.
            </h2>

            <div className="flex flex-col gap-3 w-full">
              <button
                onClick={() => setShowLogin(true)}
                className="flex items-center justify-center gap-3 bg-white text-black py-3 rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <img src="GoogleLogo.svg" alt="google" className="w-5 h-5" />
                <span className="font-normal text-sm">Sign up with Google</span>
              </button>

              <button
                onClick={() => setShowLogin(true)}
                className="flex items-center justify-center gap-3 bg-white text-black py-3 rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <img src="Apple_logo_black.svg" alt="apple" className="w-5 h-5" />
                <span className="font-normal text-sm">Sign up with Apple</span>
              </button>

              <div className="flex items-center gap-2 my-1">
                <div className="h-px bg-white/20 flex-1"></div>
                <span className="text-gray-400 text-sm">or</span>
                <div className="h-px bg-white/20 flex-1"></div>
              </div>

              <button
                onClick={() => setShowSignup(true)}
                className="bg-[#1D9BF0] hover:bg-[#1a8cd8] text-white text-sm font-semibold py-3 rounded-full cursor-pointer transition-colors"
              >
                Create account
              </button>

              <p className="text-xs text-[#71767B] leading-relaxed">
                By signing up, you agree to the{" "}
                <span className="text-[#1D9BF0] cursor-pointer">Terms of Service</span> and{" "}
                <span className="text-[#1D9BF0] cursor-pointer">Privacy Policy</span>, including{" "}
                <span className="text-[#1D9BF0] cursor-pointer">Cookie Use</span>.
              </p>
            </div>

            <div className="mt-2 w-full">
              <p className="text-white font-bold text-sm">Already have an account?</p>
              <button
                onClick={() => setShowLogin(true)}
                className="mt-3 w-full border border-gray-600 hover:border-gray-400 hover:bg-white/5 py-3 text-sm text-[#1D9BF0] font-semibold rounded-full cursor-pointer transition-colors"
              >
                Sign in
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="px-4 py-4 text-center text-[#71767c] text-[11px] flex flex-wrap justify-center gap-y-1">
        {mainPageLinks.map((link, index) => (
          <span key={index} className="flex items-center">
            <a href={link.path} className="hover:underline whitespace-nowrap">
              {link.name}
            </a>
            {index !== mainPageLinks.length - 1 && (
              <span className="mx-2 h-3.5 w-px bg-[#71767c]"></span>
            )}
          </span>
        ))}
      </div>

      {showSignup && (
        <SignupModal
          onClose={() => setShowSignup(false)}
          openLogin={() => setShowLogin(true)}
          closeSignup={() => setShowSignup(false)}
        />
      )}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          openSignup={() => { setShowLogin(false); setShowSignup(true); }}
        />
      )}

    </div>
  );
}