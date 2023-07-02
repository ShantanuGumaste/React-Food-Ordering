import classes from './MealsSummary.module.css';
import Card from "react-bootstrap/Card";

const MealsSummary = () => {
  return (
    <Card.Body className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        From swanky upscale restaurants to the cosiest hidden gems serving the
        most incredible food!
      </p>
      <p>Find the best restaurants, cafés and bars in India.</p>
    </Card.Body>
  );
};

export default MealsSummary;
