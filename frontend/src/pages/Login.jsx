import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Wrench, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your auth logic
    console.log({ email, password });
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#f2f3f5] px-4 font-sans">
      <div className="w-full max-w-sm">
        {/* Logo + heading */}
        <div className="flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1c1f26]">
            <Wrench size={20} className="text-red-500" strokeWidth={2.4} />
          </div>
          <h1 className="mt-3 text-[17px] font-extrabold tracking-tight text-gray-900">
            repAIr by Ichiban
          </h1>
          <p className="mt-1 text-[10px] font-semibold tracking-[0.15em] text-gray-400">
            AUTHENTICATION
          </p>
        </div>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="mt-6 rounded-2xl border-t-4 border-red-600 bg-white p-6 shadow-[0_1px_3px_rgba(16,24,40,0.06)]"
        >
          <label className="text-[11px] font-bold tracking-wide text-red-600">
            CORPORATE EMAIL
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@ichiban.corp"
            className="mt-1.5 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-100"
          />

          <label className="mt-4 block text-[11px] font-bold tracking-wide text-red-600">
            PASSWORD
          </label>
          <div className="relative mt-1.5">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-200 px-3 py-2.5 pr-10 text-sm text-gray-700 placeholder:text-gray-400 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-100"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <EyeOff size={16} strokeWidth={2} />
              ) : (
                <Eye size={16} strokeWidth={2} />
              )}
            </button>
          </div>

          <button
            type="submit"
            className="mt-5 w-full rounded-lg bg-[#2f6bff] py-2.5 text-sm font-bold tracking-wide text-white shadow-sm hover:bg-[#2558db]"
          >
            LOGIN
          </button>

          <div className="mt-4 text-center">
            <Link
              to="/signup"
              className="text-[11px] font-semibold tracking-wide text-gray-500 hover:text-gray-700"
            >
              + CREATE NEW ACCOUNT
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}