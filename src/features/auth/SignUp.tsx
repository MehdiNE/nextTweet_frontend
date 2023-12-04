"use client";

import React, { useState } from "react";
import Modal from "@/components/Modal";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import { FaXmark, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import DatePickers from "@/components/DatePicker";
import { Button } from "@/components/Button";

interface IProps {
  open: boolean;
  toggleOpen: () => void;
}

function SignUp({ open, toggleOpen }: IProps) {
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [step, setStep] = useState<number>(3);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function togglePhoneInput() {
    setShowPhoneInput(!showPhoneInput);
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <Modal open={open} handleClose={toggleOpen}>
      <div className="w-[620px] h-[580px] font-medium p-3">
        <div className="flex mb-5 gap-5 items-center">
          <IconButton onClick={toggleOpen}>
            <FaXmark />
          </IconButton>

          <p>Step {step} of 3</p>
        </div>

        <div className="px-20 h-full flex flex-col">
          {step === 1 && (
            <>
              <div>
                <p className="text-2xl font-semibold">Create your account</p>

                <div className="space-y-5 mt-6">
                  <TextField fullWidth label="Name" />

                  <div>
                    {showPhoneInput ? (
                      <TextField name="name" fullWidth label="Phone" />
                    ) : (
                      <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        name="email"
                      />
                    )}

                    <p
                      onClick={togglePhoneInput}
                      className="text-right mt-1 text-sm text-blue-500 cursor-pointer"
                    >
                      Use {showPhoneInput ? "email" : "phone"} instead
                    </p>
                  </div>

                  <div className="text-sm font-normal mt-1">
                    <p className="font-semibold text-lg">Date of birth</p>
                    This will not be shown publicly. Confirm your own age, even
                    if this account is for a business, a pet, or something else.
                  </div>

                  <div className="w-full">
                    <DatePickers />
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <div>
              <p className="text-2xl font-semibold">We sent you a code</p>
              <p className="text-sm mb-7 font-normal mt-1">
                Enter it below to verify mahdimahdi9731a@gmail.com.
              </p>

              <TextField label="Verification code" fullWidth />

              <p className="text-left mt-1 text-sm text-blue-500 cursor-pointer">
                Didn&apos;t receive {showPhoneInput ? "email" : "SMS"}?
              </p>
            </div>
          )}

          {step === 3 && (
            <div>
              <p className="text-2xl font-semibold">
                Youn&apos;ll need a password
              </p>
              <p className="text-sm mb-9 font-normal mt-1">
                Make sure it’s 8 characters or more.
              </p>

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
            </div>
          )}

          <div className="mt-auto pb-[70px]">
            <Button size="xl" variant="monochrome">
              Next
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default SignUp;
