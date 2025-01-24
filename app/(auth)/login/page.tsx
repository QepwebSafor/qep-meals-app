import FormLogin from "@/components/form-login";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login"
};
const LoginPage = async (
  props: {
    searchParams: Promise<{ verified: string; error: string }>;
  }
) => {
  const searchParams = await props.searchParams;

  const OAuthAccountNotLinked = searchParams.error === "OAuthAccountNotLinked";

  return (
   
    <FormLogin
    
      OAuthAccountNotLinked={OAuthAccountNotLinked}
    />
    
  );
};
export default LoginPage;
