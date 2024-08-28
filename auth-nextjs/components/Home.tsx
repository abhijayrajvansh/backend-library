import React from "react";
import { Button } from "./ui/button";
import Link from 'next/link';

const Home = () => {

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold">Home</h1>
        <Button asChild
          size={"custom"} className="bg-blue-500 hover:bg-blue-400 px-3 py-1 text-base">
          <Link href={'/login'}>login</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
