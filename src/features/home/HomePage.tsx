import React from "react";
import TimeLine from "./timeLine/TimeLine";
import LeftSidebar from "./sidebar/leftSidebar/LeftSidebar";
import Search from "./sidebar/search/Search";

function HomePage() {
  return (
    <div className="flex w-full max-w-4xl mx-auto h-screen justify-center">
      <LeftSidebar />
      <TimeLine />
      <Search />
    </div>
  );
}

export default HomePage;
