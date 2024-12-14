"use client";
import { useState, useEffect } from "react";
import { Meals } from "@/types/Meal.interface";

 const useFavouriteMeals = () => {
  const [meals, setMeals] = useState<Meals[]>([]);

  useEffect(() => {
    const storedMeals = JSON.parse(localStorage.getItem("meals") || "[]");
    setMeals(storedMeals);
  }, []);

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

  const addMealToFavourite = (meal: Meals) => {
    if (!meals.some((m) => m.idMeal === meal.idMeal)) {
      setMeals([meal, ...meals]);
    }
  };

  const removeMealFromFavourite = (id: string) => {
    setMeals(meals.filter((meal) => meal.idMeal !== id));
  };

  return { meals, addMealToFavourite, removeMealFromFavourite };
};
export default useFavouriteMeals;