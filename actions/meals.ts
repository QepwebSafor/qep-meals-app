

import { api } from "@/lib/axios";

//List all meal categories

export const loadMealCategories = async () => {
  try {
    const { data } = await api.get<any>("/categories.php");
    const categories = data.results;

    return categories;
  } catch (error) {
    console.log(error);
  }
};
//List all Categories
export const listAllCategories = async () => {
  try {
    const { data } = await api.get<any>("list.php?c=list");

    const categories = data.meals;

    return categories;
  } catch (error) {
    console.log(error);
  }
};
//List all area
export const listAllArea = async () => {
  try {
    const { data } = await api.get<any>("/list.php?a=list");
    const area = data.results;

    return area;
  } catch (error) {
    console.log(error);
  }
};
//List all Ingredients
export const listAllIngredients = async () => {
  try {
    const { data } = await api.get<any>("/list.php?i=list");
    const ingredients = data.results;

    return ingredients;
  } catch (error) {
    console.log(error);
  }
};
//Lookup full meal details by id
// www.themealdb.com/api/json/v1/1/lookup.php?i=52772
export const getMealDetailsById = async (id: number) => {
  try {
    const  {data } = await api.get(`/lookup.php?i=${id}`);
 
    return data.meals[0];
  } catch (error) {
    console.log(error);
  }
};

//Lookup a single random meal
//www.themealdb.com/api/json/v1/1/random.php

export const lookupSingleRandomMeal = async () => {
  try {
    const { data } = await api.get("/random.php");
    const { meals } = data;
    return meals;
  } catch (error) {
    console.log(error);
  }
};
//Filter by main ingredient
//www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

export const getMealsByIngredient = async (ingre: string) => {
  const { data } = await api.get(`/filter.php?i=${ingre}`);

  const meals = data.results;
  return meals;
};
//Filter by Category
//www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

export const getMealsByCategory = async (cat: string) => {
  try {
    const { data } = await api.get(`/filter.php?c=${cat}`);
    const { meals } = data;
    return meals;
  } catch (error) {
    console.log(error);
  }
};
//Filter by Area
//www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

export const getMealsByArea = async (area: string) => {
  try {
    const { data } = await api.get(`/filter.php?a=${area}`);

    const { meals } = data;

    return meals;
  } catch (error) {
    console.log(error);
  }
};

//List all meals by first letter
// www.themealdb.com/api/json/v1/1/search.php?f=a

export const getMealsByFirstLetter = async (fl: string) => {
  const { data } = await api.get(`/search.php?f=${fl}`);

  const meals = data.results;
  return meals;
};

//Search meal by name
// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

export const getMealsByName = async (name: string) => {
  const { data } = await api.get(`/search.php?s=${name}`);

  const meals = data.results;
  return meals;
};
//Images
//Meal Thumbnail Images
//Add /preview to the end of the meal image URL
// /images/media/meals/llcbn01574260722.jpg/preview

//Ingredient Thumbnail Images
// www.themealdb.com/images/ingredients/Lime.png
// www.themealdb.com/images/ingredients/Lime-Small.png
