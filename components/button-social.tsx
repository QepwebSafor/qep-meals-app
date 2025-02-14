"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

interface ButtonSocialProps {
  children: React.ReactNode;
  provider: string;
}

const ButtonSocial = ({ children, provider }: ButtonSocialProps) => {
  const router = useRouter();
  const handleClick = async () => {
    await signIn(provider);

   
  };

  return <Button onClick={handleClick}>{children}</Button>;
};
export default ButtonSocial;
