
"use client";
import { useRouter } from "next/navigation";
import { StepBack } from "lucide-react";
const AppBarWithBack: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-yellow-300 w-full  flex text-center sticky top-0 z-10">
      <h2
        className="material-icons cursor-pointe text-left"
        onClick={() => router.back()}
      >
       <StepBack />
      </h2>
     
    </div>
  );
};

export default AppBarWithBack;

