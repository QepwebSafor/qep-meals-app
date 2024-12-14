import Link from "next/link";
import { Category } from "@/types/Meal.interface";
import { listAllCategories } from "@/actions/meals";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
const CategoryPage = async () => {
  const categories: Category[] | undefined = await listAllCategories();

  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md  bg-lime-300 mb-5">
      <div className="flex w-max space-x-2 p-3 ">
        {categories?.map((category, i) => (
          <Button key={i}>
            <Link href={`category/${category.strCategory}`}>
              <p> {category.strCategory}</p>
            </Link>
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default CategoryPage;
