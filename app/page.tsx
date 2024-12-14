
import type { Metadata } from "next";


//components
import Recommended from "@/components/home/Recommended";
 import ForYou from "@/components/home/ForYou";
import CategoryPage from "@/components/home/Category";

export const metadata: Metadata = {
  title: "Home",
  description: " Recipes from around the world."
};
const Home = () => {
  return (
    <div className="container-fluid ">
      <Recommended />
      <CategoryPage />
      <ForYou />
     </div>
  
  );
};

export default Home;
