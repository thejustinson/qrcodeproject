"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [formhaserror, setFormhaserror] = useState(false);

  const handleSumbit = (e: FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "password") {
      setFormhaserror(false);
      router.push("/dashboard/devices");
    } else {
      setFormhaserror(true);
    }
  };

  return (
    <div className="p-10 flex justify-center items-center w-screen h-screen overflow-hidden">
      <div className="min-w-[400px]">
        <h1 className="text-3xl font-bold">Welcome back</h1>
        <h2 className="text-neutral-700">
          Login to continue where you left off
        </h2>

        <form className="mt-6 border-t pt-5 space-y-3" onSubmit={handleSumbit}>
          <div className={`${formhaserror ? "block" : "hidden"}`}>
            <p className="text-red-500 text-center">
              Wrong username/password combination
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-neutral-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="bg-neutral-100 p-2 px-3 outline-none border border-neutral-200 rounded-md text-neutral-600"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-neutral-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-neutral-100 p-2 px-3 outline-none border border-neutral-200 rounded-md text-neutral-600"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button className="bg-neutral-900  text-neutral-50 w-full p-3 rounded-md !mt-6 duration-200 active:scale-90">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
