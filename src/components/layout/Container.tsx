import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-screen-2xl">{children}</div>
    </div>
  );
};

export default Container;
