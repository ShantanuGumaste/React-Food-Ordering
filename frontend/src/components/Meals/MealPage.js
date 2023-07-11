import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "../UI/Loading";

const MealPage = () => {
  const [mealData, setMealData] = useState({});
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/meals/${params.id}`
        );
        if (!response.ok) {
          throw new Error("Request failed with status " + response.status);
        }
        const data = await response.json();
        if (data) {
          console.log(data);
          setMealData(data); // Display the fetched data
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [params.id]);

  return (
    <>
      {loading ? (
        <Loading/>
      ) : (
        <Row>
          <Col lg={6}>
            <img height={400} src={mealData.image} alt="Meal img" />
            <h2>{mealData.description}</h2>
          </Col>
          <Col lg={6}>
            <h1 className="my-5">{mealData.name}</h1>
            <h2>₹{mealData.price}</h2>
          </Col>
        </Row>
      )}
    </>
  );
};

export default MealPage;
