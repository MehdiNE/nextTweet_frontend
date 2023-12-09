"use client";

import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { MdOutlineSettings } from "react-icons/md";

const items = [
  {
    title: "For you",
  },
  {
    title: "Following",
  },
];

function Header() {
  const [selectedTab, setSelectedTab] = useState<string>("For you");

  function handleSelectedTab(tab: string) {
    setSelectedTab(tab);
  }

  return (
    <div className="h-12 w-full flex items-end border-b px-2">
      <div className="w-full justify-around flex">
        {items?.map((item) => (
          <div
            onClick={() => handleSelectedTab(item.title)}
            className={`pb-2 cursor-pointer ${
              selectedTab === item.title &&
              "font-semibold border-blue-500 border-b-4"
            }`}
            key={item.title}
          >
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div className="h-full flex items-center">
        <IconButton>
          <MdOutlineSettings />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
