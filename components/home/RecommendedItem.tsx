import { lookupSingleRandomMeal } from "@/actions/meals";
import { Meals } from "@/types/Meal.interface";
import Link from "next/link";
import Image from "next/legacy/image";
const RecommendedItem = async () => {
  const meals: Meals[] | undefined = await lookupSingleRandomMeal();
  return (
    <div>
      {Array.isArray(meals) &&
      meals.map((meal, i) => (
          <Link href={`recipe/${meal.idMeal}`} key={i}>
            <div>
              <div className="rec-container w-card m-2">
                <div className="shadow-top rounded-lg"></div>
                <h5 className=" text-sm absolute text-white ">{meal.strMeal}</h5>
                <div className="img-container">
                  <Image
                    src={meal.strMealThumb}
                    alt="meal"
                    width={250}
                    height={250}
                    className="object-contain mx-auto mb-4 w-auto  rounded-sm  shadow-md shadow-black border border-lime-500"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default RecommendedItem;
