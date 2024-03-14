"use client";
import { useState } from "react";
import { BsEnvelope } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/Admin/Firebase/config";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      setEmail("");
      setPassword("");
      router.push("Admin/Dashboard")
    } catch (e){
      console.error(e)
    }
  };

  return (
    <div className="bg-[#d8dade] min-h-screen pl-56 bg-contain w-full flex flex-col flex-1 justify-center">
      {/* THE SIGN IN TEXT FIELDS SECTION */}
      <div className="flex flex-col md:flex-row  gap-4 bg-white rounded-md m-4 md:m-8 shadow-md w-full md:w-2/3 shadow-[#2d2c2c]">
        <div className="w-full md:w-3/5 p-3">
          {/* COMPANY LOGO */}
          <h1 className="text-xl md:text-2xl font-bold">JobListings</h1>
          <div className="flex flex-col justify-center items-center py-8">
            <h1 className="text-center text-sm mb-3">Sign in to Account</h1>
            <div className="border-2 w-10 border-black item-center mb-4 rounded-sm"></div>
          </div>
          {/* THE SIGN IN TEXT FIELDS */}
          <div className="flex flex-col gap-4 items-center justify-center">
            {/* EMAIL TEXT FIELD */}
            <div className="bg-[#d8dade] w-full md:w-64 p-1 flex items-center mb-1 rounded-md">
              <BsEnvelope className="text-gray-400 m-2" />
              <input
                className="outline-none bg-[#d8dade] text-sm rounded-sm w-full"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            {/* PASSWORD TEXT FIELD */}
            <div className="bg-[#d8dade] w-full md:w-64 p-1 flex items-center mb-1 rounded-md">
              <MdPassword className="text-gray-400 m-2" />
              <input
                className="outline-none bg-[#d8dade] text-sm rounded-sm w-full"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </div>
          {/* FORGOT PASSWORD */}
          <a
            href="#"
            className="flex justify-end md:ml-24 items-center w-full md:w-64 text-xs"
          >
            Forgot Password?
          </a>
          {/* SIGN UP BUTTON */}
          <div className="flex justify-center items-center">
            <button className="bg-black px-4 py-2 my-6 rounded-md text-white"
            onClick={handleSignUp}>
              Sign up
            </button>
          </div>
        </div>

        {/* THE SHORT SIGN IN MESSAGE SECTION */}
        <div className="w-full md:w-2/5 bg-black text-white rounded-r-md py-4 md:py-36 px-4 md:px-12 flex flex-col items-center justify-center">
          <p className="text-lg md:text-2xl font-bold mb-2">Hello, Friend!</p>
          <div className="border-2 w-10 border-white item-center mb-4 rounded-sm"></div>
          <p className="text-center text-sm">
            Fill up your personal information and begin your journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
