import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <span className="loading loading-bars w-14"></span>
      <h1 className="text-2xl font-semibold ml-4">Loading...</h1>
    </div>
  );
};

export default Loading;
