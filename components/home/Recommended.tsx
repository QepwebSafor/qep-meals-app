

//components
import RecommendedItem from "@/components/home/RecommendedItem";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
const Recommended = () => {
  return (
    <div className="px-2">
       <h1>Recommended Today</h1>
      <ScrollArea className="w-full whitespace-nowrap rounded-md  bg-lime-300 ">
      <div className=" flex overflow-auto ">
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        
        </div>
        <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    
  );
};

export default Recommended;