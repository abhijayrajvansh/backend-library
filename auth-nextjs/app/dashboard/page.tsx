import Dashboard from "@/components/Dashboard";
import { isAuthenticated } from "@/config";
import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  if (!isAuthenticated) {
    redirect("/login");
  } else {
    return <Dashboard />;
  }
};

export default page;
