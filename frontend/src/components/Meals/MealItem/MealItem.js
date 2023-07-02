import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";
import { Card, Col, Row } from "react-bootstrap";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `₹${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      restaurant: props.restaurant,
    });
  };

  return (
    <Col sm={12} md={6} lg={4} xl={4}>
      <Card className="my-3 p-3 rounded">
        <Card.Img height={230} src={props.image} variant="top" />
        <Card.Body>
          <Card.Title>
            <Row>
              <Col lg={7}>
                <strong>
                  {props.name} <br /> ({props.restaurant})
                </strong>
              </Col>
              <Col lg={5}>
                <div className={classes.price}>{price}</div>
              </Col>
            </Row>
          </Card.Title>
          <div className="mt-3">
            <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
          </div>
        </Card.Body>
      </Card>
    </Col>
    // <li className={classes.meal}>
    //   <div>
    //     <h3>{props.name} - ({props.restaurant})</h3>
    //     <div className={classes.description}>{props.description}</div>
    //     <div className={classes.price}>{price}</div>
    //   </div>
    //   <div>
    //     <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
    //   </div>
    // </li>
  );
};

export default MealItem;
