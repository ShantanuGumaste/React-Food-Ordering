import { Row} from 'react-bootstrap';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';


const AvailableMeals = () => {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
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
      key={meal._id}
      id={meal._id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      restaurant={meal.restaurant}
      image={meal.image}
    />
  ));

  return (
    <section className={classes.meals}>
      <h2 className='text-center text-danger'>Most Ordered Meals</h2>
        <Row>{mealsList.length === 0 ? <h2 className="text-center">Loading...</h2> : mealsList}</Row>
    </section>
  );
};

export default AvailableMeals;
