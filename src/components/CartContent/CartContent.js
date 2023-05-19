import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import { useNavigate } from "react-router-dom";

import "./CartContent.css";
import { Button } from "@mui/material";

const CartContent = () => {
  const { cart } = useContext(dataContext);
  const navigate = useNavigate();

  return (
    <>
      {cart.length > 0 ? (
        <>
          <CartElements />
          <CartTotal />
          <Button variant="contained" onClick={() => navigate("/checkout")}>
            Finalizar compra
          </Button>
        </>
      ) : (
        <h2 className="cart-message-center">Your cart is empty</h2>
      )}
    </>
  );
};

export default CartContent;
