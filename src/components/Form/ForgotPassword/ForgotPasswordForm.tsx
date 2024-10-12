"use client";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useCallback } from "react";
import { auth } from "@/lib/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800", "700"],
});

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<{
    type: "error" | "success";
    message: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async () => {
    setMessage(null);
    if (!email) {
      setMessage({
        type: "error",
        message: "Please enter your email address",
      });
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@nsut\.ac\.in$/;
    if (!emailRegex.test(email)) {
      setMessage({
        type: "error",
        message: "Please enter a valid NSUT email",
      });
      return;
    }
    try {
      setLoading(true);

      await sendPasswordResetEmail(auth, email);

      setMessage({
        type: "success",
        message: "Password reset email sent. Please check your inbox.",
      });
      setLoading(false);
    } catch (e) {
      console.error(e);
      setMessage({
        type: "error",
        message: "Failed to send password reset email. Please try again.",
      });
      setLoading(false);
    }
  }, [email]);

  return (
    <div
      className={cn(
        "w-11/12 mx-auto flex justify-center items-center min-h-screen pb-4",
        poppins.className
      )}
    >
      <div className="w-full mx-auto max-w-[500px] px-4 transition-all duration-300 ease-in-out">
        <h1 className="text-5xl md:text-[77.71px] md:leading-[116.57px] text-white font-poppins font-[800] uppercase">
          Forgot Password
        </h1>
        <p className="text-white text-sm mt-2 font-poppins font-[700]">
          Enter your email address to reset your password
        </p>
        <div className="group flex items-center bg-[#261046] px-4 py-4 mt-4 rounded-lg text-lg group-hover:bg-[#1F0F2E] focus-within:outline-white focus-within:outline-offset-2 focus-within:outline">
          <svg
            width="26"
            height="19"
            viewBox="0 0 26 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.51965 0.0380859H21.6715C22.7213 0.0380859 23.728 0.434251 24.4703 1.13943C25.2126 1.84461 25.6296 2.80103 25.6296 3.7983V15.079C25.6296 16.0762 25.2126 17.0327 24.4703 17.7378C23.728 18.443 22.7213 18.8392 21.6715 18.8392H4.51965C3.46989 18.8392 2.46312 18.443 1.72083 17.7378C0.978539 17.0327 0.561523 16.0762 0.561523 15.079V3.7983C0.561523 2.80103 0.978539 1.84461 1.72083 1.13943C2.46312 0.434251 3.46989 0.0380859 4.51965 0.0380859ZM4.51965 1.29149C3.85996 1.29149 3.27944 1.50457 2.83085 1.88059L13.0956 8.18523L23.3603 1.88059C22.9117 1.50457 22.3312 1.29149 21.6715 1.29149H4.51965ZM13.0956 9.70185L2.05242 2.89585C1.94687 3.1716 1.8809 3.48495 1.8809 3.7983V15.079C1.8809 15.7438 2.15891 16.3814 2.65377 16.8515C3.14863 17.3217 3.81981 17.5858 4.51965 17.5858H21.6715C22.3714 17.5858 23.0425 17.3217 23.5374 16.8515C24.0323 16.3814 24.3103 15.7438 24.3103 15.079V3.7983C24.3103 3.48495 24.2443 3.1716 24.1388 2.89585L13.0956 9.70185Z"
              fill="#A4A4A4"
            />
          </svg>
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="bg-transparent text-white w-full focus:outline-none pl-4"
            placeholder="Your NSUT Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {message && (
          <div
            className={cn(
              "mt-4 py-2.5 px-4 text-sm rounded-lg flex items-center gap-2",
              message.type === "error" ? "bg-red-500/15" : "bg-green-500/20"
            )}
          >
            {message.type === "error" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-red-500 inline-block mr-2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-green-500 inline-block mr-2"
              >
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            )}
            <p
              className={cn(
                message.type === "error" ? "text-red-500" : "text-green-500"
              )}
            >
              {message.message}
            </p>
          </div>
        )}

        <button
          className="bg-gradient-to-r from-[#501794] to-[#3E70A1] text-white w-full py-4 mt-4 rounded-lg text-lg font-poppins font-[800] transition-all duration-300 hover:opacity-80 active:opacity-100 focus:outline-2 focus:outline-white focus:outline-offset-2 active:outline-none active:scale-95"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? <Loader /> : "Reset Password"}
        </button>
        <hr className="mt-4 md:mt-8 border-t border-[#727272]" />

        <p className="text-white text-xs font-poppins font-[700] mt-4">
          Remember your password?{" "}
          <Link href="/signin" className="text-[#a154ff]">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

function Loader() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className="w-full h-[44px]"
    >
      <circle
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="15"
        r="15"
        cx="40"
        cy="65"
      >
        <animate
          attributeName="cy"
          calcMode="spline"
          dur="2"
          values="65;135;65;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.4"
        ></animate>
      </circle>
      <circle
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="15"
        r="15"
        cx="100"
        cy="65"
      >
        <animate
          attributeName="cy"
          calcMode="spline"
          dur="2"
          values="65;135;65;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.2"
        ></animate>
      </circle>
      <circle
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="15"
        r="15"
        cx="160"
        cy="65"
      >
        <animate
          attributeName="cy"
          calcMode="spline"
          dur="2"
          values="65;135;65;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="0"
        ></animate>
      </circle>
    </svg>
  );
}
