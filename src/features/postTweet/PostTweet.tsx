"use client";

import React from "react";
import { Avatar } from "@mui/material";
import { Button } from "@/components/Button";
import WhoCanReply from "./WhoCanReply";
import PostToolbar from "./PostToolbar";

function PostTweet() {
  return (
    <div className="border-b">
      <div className="space-x-3 flex p-4 w-full">
        <Avatar />

        <textarea
          placeholder="What is happening?!"
          className="w-full placeholder:text-xl text-lg outline-none resize-none h-24 overflow-auto max-h-28"
        />
      </div>

      <WhoCanReply />

      <PostToolbar />
    </div>
  );
}

export default PostTweet;
