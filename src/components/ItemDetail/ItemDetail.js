import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const ItemDetail = ({ product }) => {
  return (
    <div className="detail">
      <img src={product.img} alt="" />
      <h1>{product.name}</h1>
      <h2>{product.category}</h2>
      <p>{product.description}</p>
      <Link to="/">
        <Button variant="contained">Volver al home</Button>
      </Link>
    </div>
  );
};
