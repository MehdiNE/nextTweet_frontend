import React from "react";
import Header from "./Header";
import PostTweet from "@/features/postTweet/PostTweet";

function TimeLine() {
  return (
    <div className="w-full max-w-[600px] border">
      <Header />

      <PostTweet />
    </div>
  );
}

export default TimeLine;
