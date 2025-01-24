"use client";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import useFavouriteMeals from "@/hooks/useFavouriteMeals";
import Image from "next/legacy/image";
import ReactPlayer from "react-player";
import { motion } from "motion/react";
import { Heart, HeartOff } from "lucide-react";
import AppBarWithBack from "@/components/AppBarWithBack";
import { Meals } from "@/types/Meal.interface";

interface MealProps {
  meal: Meals;
}

const MealDetails = ({ meal }: MealProps) => {
  const [isClient, setIsClient] = useState(false);
  const { meals, addMealToFavourite, removeMealFromFavourite } = useFavouriteMeals();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isFavorited = useMemo(() => meals.some((el) => el.idMeal === meal.idMeal), [meals, meal.idMeal]);

  if (!isClient) return null;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 0.4 } },
      }}
      className="lg:w-app w-full bg-white mx-auto pb-14"
      style={{ backgroundColor: "rgb(253, 186, 116)" }}
    >
      <AppBarWithBack />
      {isFavorited ? (
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="fixed top-20 right-5 bg-yellow-400 text-center px-2 py-1 rounded-lg"
          onClick={() => removeMealFromFavourite(meal.idMeal)}
        >
          <Heart />
        </motion.button>
      ) : (
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="fixed top-20 right-5 bg-yellow-400 text-center px-2 py-1 rounded-lg"
          onClick={() => addMealToFavourite(meal)}
        >
          <HeartOff />
        </motion.button>
      )}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 px-2">
        <div className="flex-1 items-stretch sticky top-0">
          <h1>{meal.strMeal}</h1>
          <Image
            src={meal.strMealThumb}
            alt="meal thumb"
            width={350}
            height={350}
            className="w-full mx-auto mb-4 rounded-sm shadow-md shadow-black border border-lime-500"
          />
          <div className="flex justify-center">
            <Link href={`/area/${meal.strArea}`}>
              <h3 className="m-1 bg-blue-400 px-2 py-1 rounded-lg text-black">{meal.strArea}</h3>
            </Link>
            <Link href={`/category/${meal.strCategory}`}>
              <h3 className="m-1 bg-green-400 px-2 py-1 rounded-lg text-black">{meal.strCategory}</h3>
            </Link>
          </div>
        </div>
        <div className="flex-1 mx-auto">
        <table className="table-auto text-black ">
                    <thead>
                      <tr>
                        <th>  <h2 className=" bg-transparent mr-8">Ingredients</h2></th>
                      
                        <th>  <h2 className=" bg-transparent text-left ">Meausure</h2></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{meal.strIngredient1}</td>
                        

                        <td>{meal.strMeasure1}</td>
                      </tr>
                     

                      <tr>
                        <td>{meal.strIngredient2}</td>
                    
                        <td>{meal.strMeasure2}</td>
                      </tr>
                      <tr>
                        <td>{meal.strIngredient3}</td>
               
                        <td>{meal.strMeasure3}</td>
                      </tr>
                      <tr>
                        <td>{meal.strIngredient4}</td>
                        
                        <td>{meal.strMeasure4}</td>
                      </tr>
                      <tr>
                        <td>{meal.strIngredient5}</td>
                        
                        <td>{meal.strMeasure5}</td>
                      </tr>
                      <tr>
                        <td>{meal.strIngredient6}</td>
                        
                        <td>{meal.strMeasure6}</td>
                      </tr>
                      <tr>
                        <td>{meal.strIngredient7}</td>
                        
                        <td>{meal.strMeasure7}</td>
                      </tr>
                      <tr>
                        <td>{meal.strIngredient8}</td>
                        
                        <td>{meal.strMeasure8}</td>
                      </tr>
                      <tr>
                        <td>{meal.strIngredient9}</td>
                        
                        <td>{meal.strMeasure9}</td>
                      </tr>
                      <tr>
                        <td>{meal.strIngredient10}</td>
                        
                        <td>{meal.strMeasure10}</td>
                      </tr>
                      <tr>
                        <td>{meal.strIngredient11}</td>
                        
                        <td>{meal.strMeasure11}</td>
                      </tr>
                      <tr>
                        <td>{meal.strIngredient12}</td>
                        
                        <td>{meal.strMeasure12}</td>
                      </tr>
                      <tr>
                        <td>{meal.strIngredient13}</td>
                        
                        <td>{meal.strMeasure13}</td>
                      </tr>
                      <tr>
                        <td>{meal.strIngredient14}</td>
                        
                        <td>{meal.strMeasure14}</td>
                      </tr>
                      <tr>
                        <td>{meal.strIngredient15}</td>
                        
                        <td>{meal.strMeasure15}</td>
                      </tr>
                      <tr>
                        <td>{meal.strIngredient16}</td>
                        
                        <td>{meal.strMeasure16}</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                  </div>
      <div className="px-4 py-2">
        <h1>Instructions</h1>
        <p className="text-justify">{meal.strInstructions}</p>
      </div>
      {isClient && (
        <div className="player-wrapper mt-6 px-4">
          <ReactPlayer url={meal.strYoutube} className="react-player" width="100%" height="100%" />
        </div>
      )}
    </motion.div>
  );
};

export default MealDetails;
