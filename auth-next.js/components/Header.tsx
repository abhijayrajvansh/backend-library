import Link from "next/link";
import LoginButton from "./auth/LoginButton";
import { Button } from "./ui/button";
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="absolute w-full flex items-center justify-around p-2">
      <Link href={'/'} className="text-3xl flex gap-2 p-3 bg-black/15 font-semibold text-white drop-shadow-xl rounded-xl">
        <FaHome size={35}/>
        Home.
      </Link>
      <div>
        <LoginButton>
          <Button variant={'secondary'} size={'lg'}>Sign in</Button>
        </LoginButton>
      </div>
    </nav>
  )
};

export default Header;
