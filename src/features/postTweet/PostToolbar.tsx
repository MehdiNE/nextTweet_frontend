import React from "react";
import { IconButton } from "@mui/material";
import {
  MdOutlineImage,
  MdOutlineGifBox,
  MdOutlinePoll,
  MdOutlineEmojiEmotions,
  MdOutlineScheduleSend,
} from "react-icons/md";
import { Button } from "@/components/Button";

function PostToolbar() {
  return (
    <div className="h-14 w-10/12 mx-auto border-t">
      <div className="flex items-center h-full">
        <IconButton>
          <MdOutlineImage className="text-sky-500" />
        </IconButton>
        <IconButton>
          <MdOutlineGifBox className="text-sky-500" />
        </IconButton>
        <IconButton>
          <MdOutlinePoll className="text-sky-500" />
        </IconButton>
        <IconButton>
          <MdOutlineEmojiEmotions className="text-sky-500" />
        </IconButton>
        <IconButton>
          <MdOutlineScheduleSend className="text-sky-500" />
        </IconButton>

        <div className="w-20 ml-auto">
          <Button size="sm">Post</Button>
        </div>
      </div>
    </div>
  );
}

export default PostToolbar;
