import Register from "@/components/Register";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Next-Auth | Register'
}

const page = () => {
  return (
    <Register />
  )
}

export default page;