import {getMealsByCategory } from  "@/actions/meals";
import { Meals} from "@/types/Meal.interface";
//components
import AppBarWithBack from "@/components/AppBarWithBack";
import MealResult from "@/components/MealResult";

const ByCategory =async (props:any) => {
  const params = await props.params;
  console.log('params', params)
  const  {strCategory} = params;
  /* console.log('strCategory', strCategory)

   let category_id =  strCategory!;
   console.log('category_id',category_id ) */
  const meals:Meals[] | undefined= await getMealsByCategory(strCategory);
  console.log('meals', meals)
  return (
    <div
      className="lg:w-app w-full bg-white  "
      style={{ backgroundColor: "rgb(253, 186, 116)"  }}
    >
      <AppBarWithBack />
      <h1>
        Total {Array.isArray(meals) && meals?.length} meals with category {strCategory}
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-3 sm:grid-cols-2 grid-cols-1 ">
        {Array.isArray(meals) &&  meals?.map((meal:any, i) => (
          <MealResult meal={meal} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ByCategory;
