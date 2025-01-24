

import avatarPlaceholder from "@/assets/images/avatar_placeholder.png";
import {  UserRound, UserRoundPlus , MessageCircle, Dog , PawPrint } from "lucide-react";
import Image from "next/image";
import getCurrentUser from "@/actions/getCurrentUser";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";
import UserButton from "./UserButton";

const Navbar = async () => {
  const currentUser = await getCurrentUser();


  // Opcional: Si deseas ver cuando se ejecuta la llamada a /api/auth/session

  return (
    <nav className="bg-lime-700 ">
      <div className="container  flex  ">
      <Link href="/">
          <div className=" flex-shrink-0 flex items-center">
            <Image
              src="/img/pnglogoxs.fw.png"
              alt="Qep"
              width={44}
              height={44}
              className="navbar-brand w-auto"
            />

            {currentUser ? (
              <h3 className="px-3 py- text-yellow-300">Hello, {currentUser.name}</h3>
            ) : (
              <h3 className="px-3 py-6 text-yellow-300">QEP Meals App</h3>
            )}
          </div>
        </Link>

        <div className="flex mt-5  ml-auto ">
          {currentUser ? <UserButton user={currentUser} /> : <SignInButton />}
        </div>
      </div>
    </nav>
  );
};
function SignInButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className="flex-none rounded-full  ">
          <Image
            src={avatarPlaceholder}
            alt="User profile picture"
            width={50}
            height={50}
            priority={false}
            className="aspect-square rounded-full  object-cover "
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 ">
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/login">
              <UserRound className="mr-2 h-4 w-4" />
              Sign in
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href="/register">
              <UserRoundPlus className="mr-2 h-4 w-4" />
              Sign up
            </Link>
          </DropdownMenuItem>
        <DropdownMenuItem asChild>
            <Link href="/contact">
            <MessageCircle  className="mr-2 h-4 w-4" />
              Contact
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/">
            <Dog   className="mr-2 h-4 w-4" />
              Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/discover">
            <Dog   className="mr-2 h-4 w-4" />
              Discover
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/favourite">
            <PawPrint   className="mr-2 h-4 w-4" />
              Favourite
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default Navbar;
