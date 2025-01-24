"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getMealsByName } from "@/actions/meals";
import Image from "next/legacy/image";
import { Meals } from "@/types/Meal.interface";
//components
import ForYou from "./ForYou";

const Search = () => {
  const [search, setSearch] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data.meals))
      .catch((error) => console.log(error));
  }, [search]);

  return (
    <div>
      <div className=" mb-2 bg-yellow-300 w-full p-1 text-center sticky top-0 z-10">
        <h1>Discover</h1>
      </div>
      <div className="text-center">
        <form>
          <input
            type="query"
            className="bg-yellow-300 px-3 py-2 shadow rounded-full border border-lime-600 text-black"
            value={search}
            placeholder="query for meal"
            onChange={handleChangeSearch}
          />
        </form>
      </div>

      <div className="query-container">
        <div className="mt-2">
          {search ? (
            <div className="grid grid-cols-3 sm:grid-cols-2">
              {recipe ? (
                recipe.map((meal: Meals, i) => (
                  <Link href={`recipe/${meal.idMeal}`} key={i}>
                    <h1 className="text-xl font-bold bg-yellow-300  w-fit mx-auto ">
                      {meal.strMeal}
                    </h1>
                    <Image
                      src={meal.strMealThumb}
                      alt="meal thumb"
                      width={350}
                      height={350}
                      className="object-contain mx-auto  mb-4 w-auto rounded-sm  shadow-md shadow-black border border-lime-500 "
                    />

                    <div className=" flex justify-center">
                      <Link href={`/area/${meal.strArea}`}>
                        <h3 className="m-1 bg-blue-400 px-2 py-1 rounded-lg text-black">
                          {meal.strArea}
                        </h3>
                      </Link>
                      <Link href={`/category/${meal.strCategory}`}>
                        <h3 className="m-1 bg-green-400 px-2 py-1 rounded-lg text-black">
                          {meal.strCategory}
                        </h3>
                      </Link>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="py-20 text-center">
                  <h1 className="text-center">No meal found</h1>
                </div>
              )}
            </div>
          ) : (
            <ForYou />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
