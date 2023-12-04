"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Divider } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Modal from "@/components/Modal";

function AuthContainer() {
  const [openSignUp, setOpenSignUp] = useState<boolean>(false);
  const [openSignIn, setOpenSignIn] = useState<boolean>(false);

  function openSignUpHandler() {
    setOpenSignUp(!openSignUp);
  }
  function openSignInHandler() {
    setOpenSignIn(!openSignIn);
  }

  return (
    <div className="h-screen w-full flex">
      <div className="relative w-1/2 h-full">
        <Image
          className="object-cover"
          src={"/max-bender-VmX3vmBecFE-unsplash.jpg"}
          fill
          alt="loginImage"
        />
      </div>
      <div className="w-1/2 h-full px-32 pt-32 pb-7 flex flex-col">
        <div className="font-semibold space-y-10">
          <h3 className="text-7xl">Happening now</h3>
          <h5 className="text-4xl">Join today.</h5>
        </div>

        <div className="mt-10 font-medium w-72 space-y-4">
          <Button variant="outline">
            <FcGoogle className="mr-2 text-lg" /> Sign up with Google
          </Button>
          <Button variant="outline">
            <FaGithub className="mr-2 text-lg" /> Sign up with GitHub
          </Button>

          <Divider className="text-xs">OR</Divider>
          <div>
            <Button onClick={openSignUpHandler} variant="default">
              Create account
            </Button>
            <p className="text-xs mt-1.5">
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </p>
          </div>

          <div className="space-y-3 pt-10 mt-20">
            <h5 className="text-xl">Already have an account?</h5>
            <Button
              onClick={openSignInHandler}
              variant="outline"
              className="text-blue-600"
            >
              Sign in
            </Button>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-center flex-col gap-2 text-center">
          <p>
            Created by{" "}
            <a
              href="https://github.com/MehdiNE/nextTweet_frontend"
              target="_blank"
              className="text-blue-500 cursor-pointer"
            >
              Mahdi Nemati
            </a>
          </p>

          <a
            href="https://github.com/MehdiNE/nextTweet_frontend"
            target="_blank"
          >
            <FaGithub className="text-2xl text-slate-500" />
          </a>
        </div>
      </div>

      <SignUp open={openSignUp} toggleOpen={openSignUpHandler} />
      <SignIn open={openSignIn} toggleOpen={openSignInHandler} />

      <Modal>
        <div className="w-[620px] h-[580px] font-medium p-3"></div>
      </Modal>
    </div>
  );
}

export default AuthContainer;
