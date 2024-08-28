import Login from "@/components/Login";
import React from "react";
import { redirect } from "next/navigation";
import { isAuthenticated } from '@/config';

const login = () => {
  if (isAuthenticated) {
    redirect ('/dashboard');
  } else {
    return <Login />;
  }
};

export default login;
