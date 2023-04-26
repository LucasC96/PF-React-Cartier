import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const ItemDetail = ({ product }) => {
  return (
    <div className="detail">
      <div>
        <img src={product.img} alt="" />
        <h2>{product.name}</h2>
        <h2>{product.description}</h2>
        <h2>{product.category}</h2>
        <Link to="/">
          <Button variant="contained">Volver al home</Button>
        </Link>
      </div>
    </div>
  );
};
