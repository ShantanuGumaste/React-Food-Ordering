import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Footer from './components/Layout/Footer';
import {Routes, Route} from 'react-router-dom'
import MealPage from './components/Meals/MealPage';
import MyOrders from './components/Profile/Orders/MyOrders';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);


  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Meals />
            </main>
          }
        />
        <Route path='/:id' element={<MealPage/>}/>
        <Route path='/myOrders/:id' element={<MyOrders/>}/>
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
