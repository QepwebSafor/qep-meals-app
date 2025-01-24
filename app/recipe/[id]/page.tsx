import {getMealDetailsById } from  "@/actions/meals";

//components
import MealDetail from "@/components/MealDetail";


const RecipePage =async (props: any) => {
  const params = await props.params;
  console.log('params', params)
  const  {id} = params;

  const meal= await getMealDetailsById(id);


  return (
    <div className="container-fluid ">
   {meal &&   <MealDetail meal={meal} />}
    </div>
  );
};
export default RecipePage;
