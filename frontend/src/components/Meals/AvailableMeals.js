import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';


const AvailableMeals = () => {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) {
          throw new Error("Request failed with status " + response.status);
        }
        const data = await response.json();
        setProducts(data); // Display the fetched data
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData()
  },[])

  const mealsList = products.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList.length === 0 ? "No Meals available" : mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
