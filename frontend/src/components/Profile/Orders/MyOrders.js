import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const MyOrders = () => {

    const [orderData, setOrderData] = useState([])

    const params = useParams() 

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/orders/${params.id}`);
          if (!response.ok) {
            throw new Error("Request failed with status " + response.status);
          }
          const data = await response.json();
          console.log(data)
          setOrderData(data); // Display the fetched data
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
      fetchData();
    }, [params.id]);

  return (
    <>
      <Container>
        <div>MyOrders</div>
        {orderData.map((order) => {
          return (
            <>
              <div key={order._id}>Order Id - {order._id}</div>
              <ul>
                Order Items
                {order.orderItems.map((orderItem) => {
                  return (
                    <>
                      <li>{orderItem.name}</li>
                      <li>{orderItem.price}</li>
                    </>
                  );
                })}
              </ul>
              <div key={order._id}>
                Is Delivered - {order.isDelivered === false ? "NO" : "YES"}
              </div>
              <div key={order._id}>
                Is Paid - {order.isPaid === false ? "NO" : "YES"}
              </div>
              <div key={order._id}>
                Total Price - {order.totalPrice}
              </div>
            </>
          );
        })}
      </Container>
    </>
  );
}

export default MyOrders