import React from "react";
import { UserCircle } from "lucide-react";

const AuthPage = () => {
  return (
    <div data-theme="lemonade" className="hero min-h-screen bg-base-200">
      <div className="flex flex-col items-center justify-center w-full">
        {/* Logo */}
        <h1 className="text-5xl font-extrabold mb-6 text-warning">
          <span className="text-warning">Q</span>uiz
        </h1>

        {/* Card */}
        <div className="card bg-base-100 shadow-2xl rounded-box w-full max-w-sm p-6">
          <div className="flex flex-col items-center">
            {/* Avatar */}
            <UserCircle size={80} className="text-error mb-4" />

            {/* Title */}
            <p className="text-lg font-bold mb-6 text-base-content">
              Are you ready?
            </p>

            {/* Buttons */}
            <button className="btn btn-accent w-full">Log In</button>

            <p className="my-4 font-semibold text-base-content">OR</p>

            <button className="btn btn-accent w-full">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
