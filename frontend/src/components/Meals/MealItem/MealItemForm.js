import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import { Col, Row } from 'react-bootstrap';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
    window.scrollTo({top: 0, left: 0, behavior:"instant"});
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Row>
      <Col>
        <Input
          ref={amountInputRef}
          label="QTY"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        </Col>
        <Col>
        <button>Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </Col>
      </Row>
    </form>
  );
};

export default MealItemForm;
