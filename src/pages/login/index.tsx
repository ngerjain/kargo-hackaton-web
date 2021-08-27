import { Button } from "components/button";
import { RadioButton } from "components";
import React from "react";

export default function Login() {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/assets/login.jpeg')",
      }}
    >
      <div className="absolute bg-gradient-to-b from-blue-500 to-green-400 opacity-75 inset-0 z-0"></div>
      <div className="min-h-screen sm:flex sm:flex-row  mx-0 items-center justify-center">
        <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
          <div className="self-start hidden lg:flex flex-col  text-white">
            <img src="" className="mb-3" />
            <h1 className="mb-3 font-bold text-5xl">👋 Welcome To Kargo</h1>
            <p className="pr-3">
              Lorem ipsum is placeholder text commonly used in the graphic,
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center z-10">
          <div className="p-12 bg-white mx-auto rounded-2xl w-100 z-10">
            <div className="mb-4">
              <img src="/assets/logo.png" alt="" className="w-36 h-auto" />
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
              {/* <p className="text-gray-500">Please sign in to your account.</p> */}
            </div>

            <RadioButton />

            {/* <div className="space-y-2">
              <label
                htmlFor="email"
                className="mb-5 text-sm font-medium text-gray-700 tracking-wide"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2 mt-3">
              <label
                htmlFor="password"
                className="mb-5 text-sm font-medium text-gray-700 tracking-wide"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                placeholder="Enter your password"
              />
            </div> */}
            <div className="mt-4">
              <Button className="w-full" variant="btn-success">
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
