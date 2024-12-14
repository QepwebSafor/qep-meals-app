
import {getMealsByArea } from  "@/actions/meals";
import { Meals} from "@/types/Meal.interface";

//components
import AppBarWithBack from "@/components/AppBarWithBack";
import MealResult from "@/components/MealResult";

const ByArea =async ({ params }:any) => {
  //state


  //get area by click
  let area = params.strArea;

  //get meals data by area
 const meals:Meals[] | undefined= await  getMealsByArea(area)

  return (
    <div
      className="lg:w-app w-full bg-white mx-auto pb-14"
      style={{ backgroundColor: "rgb(253, 186, 116)" }}
    >
      <AppBarWithBack />
      <h1 className="text-center my-8">
        Total {Array.isArray(meals) && meals?.length} meals in {area}
      </h1>
      <div className="grid lg:grid-cols-4 grid-cols-2">
        { Array.isArray(meals) && meals.map((meal, i) => (
          <MealResult meal={meal} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ByArea;
