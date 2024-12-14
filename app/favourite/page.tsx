"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import Image from "next/image";



const Favourite = () => {
  const [favorite, setFavorite] = useState<any[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFavorites = JSON.parse(localStorage.getItem("meals") || "[]");
      setFavorite(storedFavorites);
    }
  }, []);

  return (
    <div
      className="lg:w-app w-full bg-white mx-auto pb-14 h-vh"
      style={{ backgroundColor: "rgb(253, 186, 116)" }}
    >
      <div className="bg-yellow-300 w-full p-2 text-center sticky top-0 z-10">
        <h1>Favorites</h1>
      </div>
      <div>
        {favorite.length !== 0 ? (
          <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 mx-auto">
            {favorite.map((meal: any) => (
              <div key={meal.idMeal} className="m-2">
                <Link href={`/recipe/${meal.idMeal}`}>
                  <div className="rounded shadow-lg">
                  <h1 className="text-xl font-bold bg-yellow-300 p-3 w-fit mx-auto ">{meal.strMeal}</h1>
                    <Image
                      src={meal.strMealThumb}
                      alt="Meal"
                      width={350}
                      height={350}
                      priority
                      className="object-contain mx-auto mb-4 w-auto rounded-sm shadow-md shadow-black border border-lime-500"
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
             </div>
           
             
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-40">
            <h1>No favorite yet</h1>
            <button className="bg-yellow-400 px-4 py-2 rounded-lg text-black">
              <Link href="/">Get one</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourite;
