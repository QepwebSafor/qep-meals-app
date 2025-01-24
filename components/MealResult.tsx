import React from "react";
import Link from "next/link";

import Image from "next/legacy/image";
import { Meals } from "@/types/Meal.interface";
interface MealProps {
  meal: Meals;
}
const MealResult = ({ meal }: MealProps) => {
  return (
    <Link href={`../recipe/${meal.idMeal}`}>
      <div className="flex w-full   items-center justify-between  ">
        <div className="  mx-auto  ">
          <Image
            src={meal.strMealThumb}
            alt="Meal"
            width={250}
            height={250}
            className="object-contain  mb-4 w-auto rounded-sm   shadow-md shadow-black border border-lime-500"
          />
          <h4>{meal.strMeal}</h4>
          <div className="px-2 py-4">
            <p className="text-black truncate  h-2/4 text-base">
              {meal.strArea}
            </p>
            <p className="text-black truncate  h-2/4 text-base">
              {meal.strCategory}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MealResult;
