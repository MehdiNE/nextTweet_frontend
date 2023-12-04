import React, { useState } from "react";
import Modal from "@/components/Modal";
import { IconButton, TextField, InputAdornment, Divider } from "@mui/material";
import { FaXmark, FaRegEye, FaRegEyeSlash, FaGithub } from "react-icons/fa6";
import { Button } from "@/components/Button";
import { FcGoogle } from "react-icons/fc";

interface IProps {
  open: boolean;
  toggleOpen: () => void;
}

function SignIn({ open, toggleOpen }: IProps) {
  const [step, setStep] = useState(2);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <Modal open={open} handleClose={toggleOpen}>
      <div className="w-[620px] h-[580px] flex flex-col font-medium p-3">
        <div className="flex mb-7 items-center justify-between">
          <IconButton onClick={toggleOpen}>
            <FaXmark />
          </IconButton>

          <p className="text-lg font-semibold">
            {step === 1 ? "Sign in to nextTweet" : "Enter your password"}
          </p>
        </div>

        <div className="px-32 h-full">
          {step === 1 && (
            <>
              <Button variant="outline">
                <FcGoogle className="mr-2 text-lg" /> Sign in with Google
              </Button>
              <Button variant="outline">
                <FaGithub className="mr-2 text-lg" /> Sign in with GitHub
              </Button>

              <Divider className="text-xs">OR</Divider>

              <TextField
                name="username"
                label="Phone, email, or username"
                fullWidth
              />

              <Button variant="monochrome">Next</Button>
              <Button variant="outline">Forgot password?</Button>
            </>
          )}

          {step === 2 && (
            <div className="flex flex-col h-full">
              <TextField disabled fullWidth label="Phone, email, or username" />
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleShowPassword}>
                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <p className="text-left mt-1 text-sm text-blue-500 cursor-pointer">
                Forgot password?
              </p>

              <div className="mt-auto">
                <Button variant="monochrome" size="lg">
                  Log in
                </Button>

                <p className="text-sm font-normal my-3">
                  Don&apos;t have an account?{" "}
                  <span className="text-blue-500 cursor-pointer">Sign up</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default SignIn;
